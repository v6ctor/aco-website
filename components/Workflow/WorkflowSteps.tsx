"use client"

import { ReactNode } from "react"

interface Step {
  number: number
  title: string
  description: string
  icon: ReactNode
  color: string
  iconBg: string
  hoverBorder: string
}

interface WorkflowStepsProps {
  steps: Step[]
}

export function WorkflowSteps({ steps }: WorkflowStepsProps) {
  return (
    <div className="relative grid md:grid-cols-3 gap-12 pt-8">
      {steps.map((step, index) => (
        <div key={step.number} className="relative flex">
          {/* Card */}
          <div
            className={`group relative flex flex-col bg-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 text-left hover:${step.hoverBorder} transition-all duration-300 hover:shadow-lg hover:shadow-${step.color}/10 w-full`}
          >
            {/* Icon */}
            <div className={`w-14 h-14 rounded-xl ${step.iconBg} flex items-center justify-center transition-transform group-hover:scale-110 mb-4`}>
              {step.icon}
            </div>

            {/* Content */}
            <div className="space-y-2 flex-1">
              <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">{step.description}</p>
            </div>
          </div>

          {/* Arrow */}
          {index < steps.length - 1 && (
            <div className="hidden md:block absolute -right-6 top-1/2 -translate-y-1/2 z-10">
              <svg
                className={`w-10 h-10 text-zinc-600 animate-pulse`}
                style={{ animationDelay: `${index * 0.3}s` }}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
