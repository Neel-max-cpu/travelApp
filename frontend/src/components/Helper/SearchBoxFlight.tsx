'use client';

import React, { useState } from 'react'
import { FaCalendar, FaLocationArrow, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { IoLocationSharp } from "react-icons/io5";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Check, ChevronDownIcon, ChevronsUpDown, LocateFixed  } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { classData } from '@/data/flightData';
import { Calendar } from '../ui/calendar';

const SearchBoxFlight = () => {

  const [defaultTraveller, setDefaultTraveller] = useState(1);
  const [defaultClass, setDefaultClass] = useState('Economy');
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")



  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 !mt-3 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* search input- departure */}
      <div className="flex items-center space-x-6 w-[100%]">      
        <IoLocationSharp className='w-6 h-6 text-blue-600' />
        <div className="">
          <p className="text-lg font-medium mb-[0.2rem]">From</p>          
          <Combobox placeholderName="Departure"/>
        </div>
      </div>

      {/* search input- arrival */}
      <div className="flex items-center space-x-6 w-[100%]">
        <FaLocationArrow className='w-6 h-6 text-blue-600' />
        <div className="">
          <p className="text-lg font-medium mb-[0.2rem]">To</p>
          <Combobox placeholderName="Arrival"/>
        </div>
      </div>

      {/* search input- dparture date */}
      <div className="flex items-center space-x-6 w-[100%]">
        <FaCalendar className='w-6 h-6 text-blue-600' />
        <div className="">        
          <p className="text-lg font-medium mb-[0.2rem]">Departure date</p>
          <CalendarOption/>
        </div>
      </div>

      {/* search input-4 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <FaUserGroup className='w-6 h-6 text-blue-600' />
        {/* dialog box */}
        <Dialog>
          <form>
            <DialogTrigger asChild>
              <div className="cursor-pointer">
                <p className="text-lg font-medium mb-[0.2rem]">Travellers & Class</p>
                <div className="flex items-end space-x-2">
                  <p className="text-base font-extrabold">{defaultTraveller}</p>
                  <p className="text-base font-base">Traveller</p>
                </div>
                <p className="text-base font-normal">{defaultClass} Class</p>
              </div>
            </DialogTrigger>

            <DialogOverlay className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm" />
            <DialogContent className="sm:max-w-[425px] z-[1100]">
              <DialogHeader>
                <DialogTitle>Travellers And Class</DialogTitle>
                <DialogDescription>
                  Choose Number of Travllers and Seat Class
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="name-1">Travellers</Label>
                  {/* travellers */}
                  <SelectTraveller/>
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Class</Label>
                  <SelectClass/>
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DialogClose>
                <Button type="submit">Select</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>


      </div>
    </div>
  )
}

export default SearchBoxFlight



export function CalendarOption() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col gap-3">      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0 z-1000" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}


export function SelectTraveller() {
  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select number of Travellers" />
      </SelectTrigger>
      <SelectContent className='z-[1100]'>
        <SelectGroup>
          <SelectLabel>Traveller</SelectLabel>
          <SelectItem value="1">1 Adult</SelectItem>
          <SelectItem value="2">2 Adults</SelectItem>
          <SelectItem value="3">3 Adults</SelectItem>
          <SelectItem value="4">4 Adults</SelectItem>
          <SelectItem value="5">5 Adults</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export function SelectClass() {
  return (
    <Select>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select seat class Type" />
      </SelectTrigger>
      <SelectContent className='z-[1100]'>
        <SelectGroup>
          <SelectLabel>Class</SelectLabel>
          {classData.map((item)=>(
            <SelectItem key={item.id} value={item.value}>{item.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}




type Props={
  placeholderName:string,
}

export function Combobox({placeholderName}:Props) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const frameworks = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ]


  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value === value)?.label
            : placeholderName }
          <LocateFixed   className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0 z-1000">
        <Command className="">
          <CommandInput placeholder="Search Desired Place" className="h-9" />
          <CommandList>
            <CommandEmpty>No Destination found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}