'use client';

import React, { useEffect, useRef, useState } from 'react'
import { FaCalendar, FaLocationArrow, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { IoLocationSharp } from "react-icons/io5";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Axis3D, Check, ChevronDownIcon, ChevronsUpDown, LocateFixed } from 'lucide-react';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { classData } from '@/data/flightData';
import { Calendar } from '../ui/calendar';
import { API_PATHS, fetchSearchAccessToken } from '@/utils/apiPaths';
import moment from 'moment';
import useAmadeusToken from '@/hooks/useAmadeusToken';
import axiosInstance from '@/utils/axiosInstance';

type FlightSearchProps={
  fromAirport: { label: string; value: string } | null;
  setFromAirport: React.Dispatch<React.SetStateAction<{ label: string; value: string } | null>>;
  toAirport: { label: string; value: string } | null;
  setToAirport: React.Dispatch<React.SetStateAction<{ label: string; value: string } | null>>;
  defaultTraveller: string;
  setDefaultTraveller: React.Dispatch<React.SetStateAction<string>>;
  defaultClass: {
    id: number;
    value: string;
    name: string;
  };
  setDefaultClass: React.Dispatch<React.SetStateAction<{
    id: number;
    value: string;
    name: string;
  }>>;
  formdate: Date | undefined;
  setFormDate: React.Dispatch<React.SetStateAction<Date | undefined>>
}


const SearchBoxFlight = ( 
    {

      fromAirport,
      setFromAirport,
      toAirport,
      setToAirport,
      defaultTraveller,
      setDefaultTraveller,
      defaultClass,
      setDefaultClass,
      formdate,
      setFormDate
    } :FlightSearchProps
  ) => {

  //temporary
  const [tempTraveller, setTempTraveller] = useState("1");
  const [tempClass, setTempClass] = useState(classData[0]);
      
  const [open, setOpen] = React.useState(false)  
  const [isDialogOpen, setIsDialogOpen] = useState(false);  

  const handleTravellerAndClass = () => {
    setDefaultTraveller(tempTraveller);
    setDefaultClass(tempClass);
    setIsDialogOpen(false);
  }

  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 !mt-3 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* search input- departure */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <IoLocationSharp className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">From</p>
          </div>
          <Combobox
            placeholderName="Departure"
            value={fromAirport}
            onChange={setFromAirport}
          />
        </div>
      </div>

      {/* search input- arrival */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaLocationArrow className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">To</p>
          </div>
          <Combobox
            placeholderName="Arrival"
            value={toAirport}
            onChange={setToAirport}
          />
        </div>
      </div>

      {/* search input- dparture date */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaCalendar className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">Departure date</p>
          </div>
          <CalendarOption onChange={setFormDate} />
        </div>
      </div>

      {/* search input-4 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <FaUserGroup className='w-6 h-6 text-blue-600' />
        {/* dialog box */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <form>
            <DialogTrigger asChild onClick={() => setIsDialogOpen(true)}>
              <div className="cursor-pointer">
                <p className="text-lg font-medium mb-[0.2rem]">Travellers & Class</p>
                <div className="flex items-end space-x-2">
                  <p className="text-base font-extrabold">{defaultTraveller}</p>
                  <p className="text-base font-base">Traveller</p>
                </div>
                <p className="text-base font-normal">{defaultClass.name} Class</p>
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
                  <SelectTraveller value={tempTraveller} onChange={setTempTraveller} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="username-1">Class</Label>
                  {/* select class */}
                  <SelectClass value={tempClass} onChange={setTempClass} />
                </div>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>Cancel</Button>
                </DialogClose>
                <Button onClick={handleTravellerAndClass} type="submit">Select</Button>
              </DialogFooter>
            </DialogContent>
          </form>
        </Dialog>
      </div>

    </div>
  )
}

export default SearchBoxFlight

type PropsDate={
  onChange: (val: Date)=>void;
}

export function CalendarOption({onChange}:PropsDate) {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <div className="flex flex-col gap-3">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-[100%] justify-between font-normal"
          >
            {date ? moment(date).format("DD-MM-YYYY") : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0 z-1000" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              if(date){
                setDate(date);
                onChange(date);  
                setOpen(false);
              }
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}

type PropsTraveller = {
  onChange: (val: string) => void;
  value: string;
}


export function SelectTraveller({ value, onChange }: PropsTraveller) {
  return (
    <Select value={value} onValueChange={onChange}>
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


type ClassType = {
  id: number;
  value: string;
  name: string;
};

type PropsClass = {
  onChange: (val: ClassType) => void;
  value: ClassType;
}

export function SelectClass({ value, onChange }: PropsClass) {
  return (
    <Select value={value.value} 
    onValueChange={(val) => {
      const selected = classData.find((item) => item.value === val);
      if (selected) onChange(selected);
    }}>
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder="Select seat class Type" />
      </SelectTrigger>
      <SelectContent className='z-[1100]'>
        <SelectGroup>
          <SelectLabel>Class</SelectLabel>
          {classData.map((item) => (
            <SelectItem key={item.id} value={item.value}>{item.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}




type Props = {
  placeholderName: string,
  onChange: (val: { label: string; value: string } | null) => void;
  value: { label: string; value: string } | null;
}

export function Combobox({ placeholderName, value, onChange }: Props) {
  //verificaiton token
  const amadeusToken = useAmadeusToken();

  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = useState<{ label: string; value: string }[]>([])
  const [search, setSearch] = useState("")

  const latestSearchRef = useRef("");
  useEffect(() => {

    if (!search || search.length < 2) return;

    const controller = new AbortController();
    latestSearchRef.current = search;
    const fetchLocations = setTimeout(async () => {
      try {
        const response = await axiosInstance.get(
          API_PATHS.FLIGHT.CITYWITHNAME,
          {
            headers: {
              Authorization: `Bearer ${amadeusToken}`,
            },
            params: {
              subType: "AIRPORT",
              keyword: search,
              "page[limit]": 5,
            },
          }
        );

        const toTitleCase = (str: string) => {
          return str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase())
        }

        const mapped = response.data?.data?.map((loc: any) => {
          const city = toTitleCase(loc.address?.cityName || loc.name)
          const airport = loc.subType === "AIRPORT" ? `, ${toTitleCase(loc.name)}` : ""
          const code = loc.iataCode ? ` (${loc.iataCode})` : ""

          return {
            label: `${city}${airport}${code}`,
            value: loc.iataCode,
          }
        })

        //update only if the search is different
        if (latestSearchRef.current === search) {
          setOptions(mapped);
        }
      } catch (error) {
        console.log("error in searching the destionat!");
      }
    }, 1000);

    //wait a little bit after the keyboard typing finishes
    return () => {
      controller.abort(); // Cancel old request
      clearTimeout(fetchLocations); // Clear debounce timer
    };

  }, [search, amadeusToken]);





  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[100%] justify-between truncate"
        >
          {value?.label || placeholderName}
          <LocateFixed className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[100%] p-0 z-1000">
        <Command className="">
          <CommandInput placeholder="Search Desired Place" className="h-9" value={search} onValueChange={(val) => setSearch(val)} />
          <CommandList>
            <CommandEmpty>No Destination found.</CommandEmpty>
            <CommandGroup>
              {options.map((opt) => (
                <CommandItem
                  key={opt.value}
                  value={`${opt.label} (${opt.value})`}
                  onSelect={() => {
                    onChange(opt || null);
                    setOpen(false)
                  }}
                >
                  {opt.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value?.value === opt.value ? "opacity-100" : "opacity-0"
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