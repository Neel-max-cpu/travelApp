'use client';
import React, { useEffect, useRef, useState } from 'react'
import { FaCalendar, FaMap } from 'react-icons/fa'
import { FaUserGroup } from 'react-icons/fa6'
import { Switch } from '../ui/switch'
import { Label } from '../ui/label'
import useAmadeusToken from '@/hooks/useAmadeusToken';
import { Popover, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Check, ChevronDownIcon, LocateFixed } from 'lucide-react';
import { PopoverContent } from '@radix-ui/react-popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '../ui/command';
import axiosInstance from '@/utils/axiosInstance';
import { API_PATHS } from '@/utils/apiPaths';
import { cn } from '@/lib/utils';
import { Calendar } from '../ui/calendar';
import moment from 'moment';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select';
import { amenitiesData, distanceFromCityCenter, guestData, hotelStartData } from '@/data/hotelData';
import { MultiSelect } from '../ui/multiSelect';

type HotelProps = {
  hotelLocation: { label: string; value: string } | null;
  setHotelLocation: React.Dispatch<React.SetStateAction<{ label: string; value: string } | null>>;
  checkInDate: Date | undefined;
  setCheckInDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  checkOutDate: Date | undefined;
  setCheckOutDate: React.Dispatch<React.SetStateAction<Date | undefined>>;
  cityCenterDistance: string;
  setCityCenterDistance: React.Dispatch<React.SetStateAction<string>>;
  aminities:string[];
  setAminities: React.Dispatch<React.SetStateAction<string[]>>;
  hotelStars: string;
  setHotelStars: React.Dispatch<React.SetStateAction<string>>;
  guestNumber: number;
  setGuestNumber: React.Dispatch<React.SetStateAction<number>>
}

const SearchBoxHotel = ({
  hotelLocation,
  setHotelLocation,
  checkInDate,
  setCheckInDate,
  checkOutDate,
  setCheckOutDate,
  cityCenterDistance,
  setCityCenterDistance,
  aminities,
  setAminities,
  hotelStars,
  setHotelStars,
  guestNumber,
  setGuestNumber,
}: HotelProps) => {


  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const resetForm = () => {
    setHotelLocation(null);
    setCheckInDate(undefined);
    setCheckOutDate(undefined);
    setCityCenterDistance("5");
    setAminities([]);
    setHotelStars("");
  };

  return (
    <div className="bg-white rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center justify-center gap-8 !mt-3 sm:mt-12 w-[95%] sm:w-[80%]">
      {/* search input-1 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaMap className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">Location</p>
          </div>
          <Combobox
            placeholderName="*Where are you going"
            value={hotelLocation}
            onChange={setHotelLocation}
          />
        </div>
      </div>

      {/* search input-2 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaCalendar className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">Check In</p>
          </div>
          <CalendarOption placeHolder="*Check In Date" onChange={setCheckInDate} />
        </div>
      </div>

      {/* search input-3 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaCalendar className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">Check Out</p>
          </div>
          <CalendarOption placeHolder="Check Out Date" onChange={setCheckOutDate} />
        </div>
      </div>

      {/* search input-4 */}
      <div className="flex items-center space-x-6 w-[100%]">
        <div className="w-full">
          <div className="flex space-x-2">
            <FaUserGroup className='w-6 h-6 text-blue-600' />
            <p className="text-lg font-medium mb-[0.2rem]">Other Amenities</p>
          </div>
          {/* dialog box */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            {/* prevent default so no reload after submit */}
            {/* <form onSubmit={(e) => e.preventDefault()}> */}
            <>
              <DialogTrigger asChild onClick={() => setIsDialogOpen(true)}>
                <p className="text-base text-gray-500 font-normal cursor-pointer">Guest, Room...</p>
              </DialogTrigger>
              <DialogOverlay className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm" />
              <DialogContent className="sm:max-w-[425px] z-[1100]">
                <DialogHeader>
                  <DialogTitle>Other Amenities</DialogTitle>
                  <DialogDescription>
                    Choose your room type, number of guest and other facilities.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4">
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Distance From City Center</Label>
                    {/* distance */}
                    <SelectOptionDialog
                      placeHolder="Distance"
                      value={cityCenterDistance}
                      onChange={setCityCenterDistance}
                      data={distanceFromCityCenter}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="username-1">Add Ons</Label>
                    <p className="text-gray-500 text-xs">Choose the aminities you are intrested in.</p>
                    {/* aminities */}
                    <MultiSelect
                    className="z-[1100]"
                     options={amenitiesData}
                     onValueChange={setAminities}      
                     value={aminities}               
                     placeholder="Select Aminities"
                     variant="inverted"
                     animation={2}
                     maxCount={3}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Hotel Star</Label>
                    {/* hotel stars */}
                    <SelectOptionDialog
                      placeHolder="Hotel Type"
                      value={hotelStars}
                      onChange={setHotelStars}
                      data={hotelStartData}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="name-1">Number Of Guests</Label>
                    {/* hotel stars */}
                    <SelectOptionDialog
                      placeHolder="Guests"
                      value={guestNumber}
                      onChange={setGuestNumber}
                      data={guestData}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" 
                      onClick={() =>{
                        setIsDialogOpen(false);
                        resetForm();                  
                      } 
                    }>
                      Cancel
                    </Button>
                  </DialogClose>
                  <Button type="submit" onClick={() => setIsDialogOpen(false)}>Select</Button>
                </DialogFooter>
              </DialogContent>
            {/* </form> */}
            </>
          </Dialog>
        </div>
      </div>
    </div>
  )
}

export default SearchBoxHotel;



type PropsSelectOption = {
  placeHolder: string;
  value: any;
  onChange: (val: any) => void;
  data: {
    id: number;
    value: any;
    name: string;
  }[];
}


export function SelectOptionDialog({ placeHolder, value, onChange, data }: PropsSelectOption) {
  return (
    <Select
      value={value}
      onValueChange={(val) => {
        const selected = data.find((item) => item.value === val);
        if (selected) onChange(selected.value);
      }}
    >
      <SelectTrigger className="w-[100%]">
        <SelectValue placeholder={placeHolder} />
      </SelectTrigger>
      <SelectContent className='z-[1100]'>
        <SelectGroup>
          <SelectLabel>{placeHolder}</SelectLabel>
          {data.map((item) => (
            <SelectItem key={item.id} value={item.value}>{item.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}



type PropsDate = {
  placeHolder: string;
  onChange: (val: Date) => void;
}

export function CalendarOption({ placeHolder, onChange }: PropsDate) {
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
            <span className={date ? "" : "text-gray-500"}>
              {date ? moment(date).format("DD-MM-YYYY") : placeHolder}
            </span>
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0 z-1000" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              if (date) {
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
          API_PATHS.COMMON.CITYWITHNAME,
          {
            headers: {
              Authorization: `Bearer ${amadeusToken}`,
            },
            params: {
              subType: "CITY",
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
          const code = loc.iataCode ? ` (${loc.iataCode})` : ""

          return {
            label: `${city}${code}`,
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
          <span className={value ? "" : "text-gray-500"}>
            {value?.label || placeholderName}
          </span>
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
