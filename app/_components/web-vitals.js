'use client'
 
import { useReportWebVitals } from 'next/web-vitals-attribution'
 
export function WebVitals() {
  useReportWebVitals((metric) => {
    console.log(metric)
  })
}