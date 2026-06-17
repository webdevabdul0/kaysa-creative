"use client";
import { useEffect, useRef, useState } from "react";
import { Color, Scene, Fog, PerspectiveCamera, Vector3 } from "three";
import ThreeGlobe from "three-globe";
import { useThree, Canvas, extend } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import countries from "@/data/globe.json";

declare module "@react-three/fiber" {
  interface ThreeElements {
    threeGlobe: ThreeElements["mesh"] & { new (): ThreeGlobe };
  }
}

extend({ ThreeGlobe: ThreeGlobe });

const RING_PROPAGATION_SPEED = 3;
const cameraZ = 300;

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: { lat: number; lng: number };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

export type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

function genRandomNumbers(min: number, max: number, count: number) {
  const arr: number[] = [];
  while (arr.length < count) {
    const r = Math.floor(Math.random() * (max - min)) + min;
    if (!arr.includes(r)) arr.push(r);
  }
  return arr;
}

export function Globe({ globeConfig, data }: WorldProps) {
  const globeRef = useRef<ThreeGlobe | null>(null);
  const groupRef = useRef<any>();
  const [isInitialized, setIsInitialized] = useState(false);

  const defaults = {
    pointSize: 1,
    atmosphereColor: "#8E86F2",
    showAtmosphere: true,
    atmosphereAltitude: 0.18,
    polygonColor: "rgba(200,190,255,0.7)",
    globeColor: "#0D0B2A",
    emissive: "#1a1040",
    emissiveIntensity: 0.15,
    shininess: 0.9,
    arcTime: 1400,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    ...globeConfig,
  };

  useEffect(() => {
    if (!globeRef.current && groupRef.current) {
      globeRef.current = new ThreeGlobe();
      (groupRef.current as any).add(globeRef.current);
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (!globeRef.current || !isInitialized) return;
    const mat = globeRef.current.globeMaterial() as any;
    mat.color = new Color(defaults.globeColor);
    mat.emissive = new Color(defaults.emissive);
    mat.emissiveIntensity = defaults.emissiveIntensity;
    mat.shininess = defaults.shininess;
  }, [isInitialized]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;

    const points = data
      .flatMap((arc) => [
        { size: defaults.pointSize, order: arc.order, color: arc.color, lat: arc.startLat, lng: arc.startLng },
        { size: defaults.pointSize, order: arc.order, color: arc.color, lat: arc.endLat, lng: arc.endLng },
      ])
      .filter((v, i, a) => a.findIndex((v2) => v2.lat === v.lat && v2.lng === v.lng) === i);

    globeRef.current
      .hexPolygonsData((countries as any).features)
      .hexPolygonResolution(3)
      .hexPolygonMargin(0.7)
      .showAtmosphere(defaults.showAtmosphere)
      .atmosphereColor(defaults.atmosphereColor)
      .atmosphereAltitude(defaults.atmosphereAltitude)
      .hexPolygonColor(() => defaults.polygonColor);

    globeRef.current
      .arcsData(data)
      .arcStartLat((d: any) => d.startLat)
      .arcStartLng((d: any) => d.startLng)
      .arcEndLat((d: any) => d.endLat)
      .arcEndLng((d: any) => d.endLng)
      .arcColor((d: any) => d.color)
      .arcAltitude((d: any) => d.arcAlt)
      .arcStroke(() => [0.32, 0.28, 0.3][Math.round(Math.random() * 2)])
      .arcDashLength(defaults.arcLength)
      .arcDashInitialGap((d: any) => d.order)
      .arcDashGap(15)
      .arcDashAnimateTime(() => defaults.arcTime);

    globeRef.current
      .pointsData(points)
      .pointColor((d: any) => d.color)
      .pointsMerge(true)
      .pointAltitude(0.0)
      .pointRadius(2);

    globeRef.current
      .ringsData([])
      .ringColor(() => defaults.polygonColor)
      .ringMaxRadius(defaults.maxRings)
      .ringPropagationSpeed(RING_PROPAGATION_SPEED)
      .ringRepeatPeriod((defaults.arcTime * defaults.arcLength) / defaults.rings);
  }, [isInitialized, data]);

  useEffect(() => {
    if (!globeRef.current || !isInitialized || !data) return;
    const interval = setInterval(() => {
      if (!globeRef.current) return;
      const idxs = genRandomNumbers(0, data.length, Math.floor((data.length * 4) / 5));
      globeRef.current.ringsData(
        data.filter((_, i) => idxs.includes(i)).map((d) => ({ lat: d.startLat, lng: d.startLng, color: d.color }))
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [isInitialized, data]);

  return <group ref={groupRef} />;
}

export function WebGLRendererConfig() {
  const { gl, size } = useThree();
  useEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    gl.setSize(size.width, size.height);
    gl.setClearColor(0x000000, 0);
  }, []);
  return null;
}

export function World(props: WorldProps) {
  const { globeConfig } = props;
  const scene = new Scene();
  return (
    <Canvas scene={scene} camera={new PerspectiveCamera(50, 1.2, 180, 1800)} gl={{ alpha: true, antialias: true }}>
      <WebGLRendererConfig />
      <ambientLight color={globeConfig.ambientLight ?? "#6B63D8"} intensity={0.6} />
      <directionalLight color={globeConfig.directionalLeftLight ?? "#A99FFF"} position={new Vector3(-400, 100, 400)} />
      <directionalLight color={globeConfig.directionalTopLight ?? "#ffffff"} position={new Vector3(-200, 500, 200)} />
      <pointLight color={globeConfig.pointLight ?? "#8E86F2"} position={new Vector3(-200, 500, 200)} intensity={0.8} />
      <Globe {...props} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minDistance={cameraZ}
        maxDistance={cameraZ}
        autoRotateSpeed={1}
        autoRotate={true}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}
