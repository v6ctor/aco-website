"use client"

import * as React from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Input } from "@/components/ui/input"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateRangePickerProps {
  dateRange: { from: string; to: string }
  onDateRangeChange: (range: { from: string; to: string }) => void
  className?: string
}

function formatDate(dateStr: string) {
  if (!dateStr) {
    return ""
  }

  const date = new Date(dateStr)
  return date.toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  })
}

function isValidDate(date: Date | undefined) {
  if (!date) {
    return false
  }
  return !isNaN(date.getTime())
}

export function DateRangePicker({ dateRange, onDateRangeChange, className }: DateRangePickerProps) {
  const [openFrom, setOpenFrom] = React.useState(false)
  const [openTo, setOpenTo] = React.useState(false)

  const fromDate = dateRange.from ? new Date(dateRange.from) : undefined
  const toDate = dateRange.to ? new Date(dateRange.to) : undefined

  const [monthFrom, setMonthFrom] = React.useState<Date | undefined>(fromDate || new Date())
  const [monthTo, setMonthTo] = React.useState<Date | undefined>(toDate || new Date())

  const [valueFrom, setValueFrom] = React.useState(formatDate(dateRange.from))
  const [valueTo, setValueTo] = React.useState(formatDate(dateRange.to))

  return (
    <div className={`flex justify-center items-center gap-2 ${className}`}>
      {/* From Date */}
      <div className="relative flex-1 w-32">
        <Input
          id="date-from"
          value={valueFrom}
          placeholder="January 01, 2025"
          className="bg-zinc-900/50 border-zinc-800/50 text-white pr-10"
          onChange={(e) => {
            const date = new Date(e.target.value)
            setValueFrom(e.target.value)
            if (isValidDate(date)) {
              const dateStr = date.toISOString().split('T')[0]
              onDateRangeChange({ from: dateStr, to: dateRange.to })
              setMonthFrom(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpenFrom(true)
            }
          }}
        />
        <Popover open={openFrom} onOpenChange={setOpenFrom}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select from date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 bg-zinc-900 border-zinc-800"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={fromDate}
              captionLayout="dropdown"
              month={monthFrom}
              onMonthChange={setMonthFrom}
              onSelect={(date) => {
                if (date) {
                  const dateStr = date.toISOString().split('T')[0]
                  onDateRangeChange({ from: dateStr, to: dateRange.to })
                  setValueFrom(formatDate(dateStr))
                  setOpenFrom(false)
                }
              }}
              className="text-white"
            />
          </PopoverContent>
        </Popover>
      </div>

      <p>to</p>
      <div className="relative flex-1">
        <Input
          id="date-to"
          value={valueTo}
          placeholder="January 31, 2025"
          className="bg-zinc-900/50 border-zinc-800/50 text-white pr-10"
          onChange={(e) => {
            const date = new Date(e.target.value)
            setValueTo(e.target.value)
            if (isValidDate(date)) {
              const dateStr = date.toISOString().split('T')[0]
              onDateRangeChange({ from: dateRange.from, to: dateStr })
              setMonthTo(date)
            }
          }}
          onKeyDown={(e) => {
            if (e.key === "ArrowDown") {
              e.preventDefault()
              setOpenTo(true)
            }
          }}
        />
        <Popover open={openTo} onOpenChange={setOpenTo}>
          <PopoverTrigger asChild>
            <Button
              variant="ghost"
              className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
            >
              <CalendarIcon className="size-3.5" />
              <span className="sr-only">Select to date</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto overflow-hidden p-0 bg-zinc-900 border-zinc-800"
            align="end"
            alignOffset={-8}
            sideOffset={10}
          >
            <Calendar
              mode="single"
              selected={toDate}
              captionLayout="dropdown"
              month={monthTo}
              onMonthChange={setMonthTo}
              onSelect={(date) => {
                if (date) {
                  const dateStr = date.toISOString().split('T')[0]
                  onDateRangeChange({ from: dateRange.from, to: dateStr })
                  setValueTo(formatDate(dateStr))
                  setOpenTo(false)
                }
              }}
              className="text-white"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  )
}
