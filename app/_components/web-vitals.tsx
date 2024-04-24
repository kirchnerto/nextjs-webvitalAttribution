'use client'
 
import { useReportWebVitals } from 'next/web-vitals'
import type { NextWebVitalsMetric } from "next/app";
 
export function WebVitals() {
  useReportWebVitals((metric: NextWebVitalsMetric) => {
    console.log(metric)
  })
}