export const classData = [
  { id: 1, value: "ECONOMY", name: "Economy" },
  { id: 2, value: "PREMIUM_ECONOMY", name: "Premium Economy" },
  { id: 3, value: "BUSINESS", name: "Buisness" },
  { id: 4, value: "FIRST", name: "First" },
];

export const body = [
  // post request
  {
    currencyCode: "INR",
    originDestinations: [
      {
        id: "1",
        originLocationCode: "DEL",
        destinationLocationCode: "MAD",
        departureDateTimeRange: {
          date: "2025-07-25",
          time: "10:00:00",
        },
      },
    ],
    travelers: [
      {
        id: "1",
        travelerType: "ADULT",
      },
      {
        id: "2",
        travelerType: "ADULT",
      },
      {
        id: "3",
        travelerType: "ADULT",
      },
      {
        id: "4",
        travelerType: "ADULT",
      },
    ],
    sources: ["GDS"],
    searchCriteria: {
      maxFlightOffers: 5,
      flightFilters: {
        cabinRestrictions: [
          {
            cabin: "ECONOMY",
            coverage: "MOST_SEGMENTS",
            originDestinationIds: ["1"],
          },
        ],
      },
    },
  },
];

export const flightResponse5data = [
  {
    meta: {
      count: 5,
    },
    data: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-25",
        lastTicketingDateTime: "2025-07-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT30H",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-25T12:00:00",
                },
                arrival: {
                  iataCode: "CAI",
                  terminal: "3",
                  at: "2025-07-25T16:20:00",
                },
                carrierCode: "MS",
                number: "974",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "MS",
                },
                duration: "PT6H50M",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "CAI",
                  terminal: "3",
                  at: "2025-07-26T10:15:00",
                },
                arrival: {
                  iataCode: "MAD",
                  terminal: "1",
                  at: "2025-07-26T14:30:00",
                },
                carrierCode: "MS",
                number: "753",
                aircraft: {
                  code: "321",
                },
                operating: {
                  carrierCode: "MS",
                },
                duration: "PT5H15M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "140996.00",
          base: "47320.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "140996.00",
          additionalServices: [
            {
              amount: "23138",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["MS"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "35249.00",
              base: "11830.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "WLRIEGO",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "35249.00",
              base: "11830.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "WLRIEGO",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "3",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "35249.00",
              base: "11830.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "WLRIEGO",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "4",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "35249.00",
              base: "11830.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "WLRIEGO",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-25",
        lastTicketingDateTime: "2025-07-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT24H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-25T17:00:00",
                },
                arrival: {
                  iataCode: "DOH",
                  at: "2025-07-25T18:55:00",
                },
                carrierCode: "QR",
                number: "4781",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "6E",
                },
                duration: "PT4H25M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DOH",
                  at: "2025-07-26T07:50:00",
                },
                arrival: {
                  iataCode: "MAD",
                  terminal: "4S",
                  at: "2025-07-26T14:10:00",
                },
                carrierCode: "QR",
                number: "149",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT7H20M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "145048.00",
          base: "74060.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "145048.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["QR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "3",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "4",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "3",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-25",
        lastTicketingDateTime: "2025-07-25",
        numberOfBookableSeats: 4,
        itineraries: [
          {
            duration: "PT31H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-25T17:00:00",
                },
                arrival: {
                  iataCode: "DOH",
                  at: "2025-07-25T18:55:00",
                },
                carrierCode: "QR",
                number: "4781",
                aircraft: {
                  code: "737",
                },
                operating: {
                  carrierCode: "6E",
                },
                duration: "PT4H25M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DOH",
                  at: "2025-07-26T14:55:00",
                },
                arrival: {
                  iataCode: "MAD",
                  terminal: "4S",
                  at: "2025-07-26T21:15:00",
                },
                carrierCode: "QR",
                number: "151",
                aircraft: {
                  code: "789",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT7H20M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "145048.00",
          base: "74060.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "145048.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["QR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "3",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "4",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "36262.00",
              base: "18515.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "NJR4I1RI",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "N",
                includedCheckedBags: {
                  weight: 25,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "50 PCT QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "4",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-25",
        lastTicketingDateTime: "2025-07-25",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT28H25M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-25T12:00:00",
                },
                arrival: {
                  iataCode: "CAI",
                  terminal: "3",
                  at: "2025-07-25T16:20:00",
                },
                carrierCode: "MS",
                number: "974",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "MS",
                },
                duration: "PT6H50M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "CAI",
                  terminal: "3",
                  at: "2025-07-26T08:40:00",
                },
                arrival: {
                  iataCode: "MAD",
                  terminal: "1",
                  at: "2025-07-26T12:55:00",
                },
                carrierCode: "MS",
                number: "2753",
                aircraft: {
                  code: "738",
                },
                operating: {
                  carrierCode: "MS",
                },
                duration: "PT5H15M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "151076.00",
          base: "56920.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "151076.00",
          additionalServices: [
            {
              amount: "23138",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["MS"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "37769.00",
              base: "14230.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "SLRIEGO",
                class: "S",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "37769.00",
              base: "14230.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "SLRIEGO",
                class: "S",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "3",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "37769.00",
              base: "14230.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "SLRIEGO",
                class: "S",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
          {
            travelerId: "4",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "37769.00",
              base: "14230.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "TRIMSO",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "SLRIEGO",
                class: "S",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "5",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-25",
        lastTicketingDateTime: "2025-07-25",
        numberOfBookableSeats: 5,
        itineraries: [
          {
            duration: "PT18H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-25T16:55:00",
                },
                arrival: {
                  iataCode: "AUH",
                  terminal: "A",
                  at: "2025-07-25T19:10:00",
                },
                carrierCode: "EY",
                number: "215",
                aircraft: {
                  code: "320",
                },
                operating: {
                  carrierCode: "EY",
                },
                duration: "PT3H45M",
                id: "9",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "AUH",
                  terminal: "A",
                  at: "2025-07-26T02:30:00",
                },
                arrival: {
                  iataCode: "MAD",
                  terminal: "4",
                  at: "2025-07-26T08:20:00",
                },
                carrierCode: "EY",
                number: "101",
                aircraft: {
                  code: "781",
                },
                operating: {
                  carrierCode: "EY",
                },
                duration: "PT7H50M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "153528.00",
          base: "89660.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "153528.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: false,
        },
        validatingAirlineCodes: ["EY"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "38382.00",
              base: "22415.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "2",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "38382.00",
              base: "22415.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "3",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "38382.00",
              base: "22415.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
          {
            travelerId: "4",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "38382.00",
              base: "22415.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "VLN00H6R",
                brandedFare: "YBASIC",
                brandedFareLabel: "ECONOMY BASIC",
                class: "V",
                includedCheckedBags: {
                  weight: 0,
                  weightUnit: "KG",
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "EXCESS WEIGHT SPECIAL CHARGE",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FOOD AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRIORITY ACCESS",
                    isChargeable: true,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    dictionaries: {
      locations: {
        MAD: {
          cityCode: "MAD",
          countryCode: "ES",
        },
        AUH: {
          cityCode: "AUH",
          countryCode: "AE",
        },
        CAI: {
          cityCode: "CAI",
          countryCode: "EG",
        },
        DEL: {
          cityCode: "DEL",
          countryCode: "IN",
        },
        DOH: {
          cityCode: "DOH",
          countryCode: "QA",
        },
      },
      aircraft: {
        "320": "AIRBUS A320",
        "321": "AIRBUS A321",
        "737": "BOEING 737 ALL SERIES PASSENGER",
        "738": "BOEING 737-800",
        "781": "BOEING 787-10",
        "789": "BOEING 787-9",
        "77W": "BOEING 777-300ER",
        "32N": "AIRBUS A320NEO",
      },
      currencies: {
        INR: "INDIAN RUPEE",
      },
      carriers: {
        QR: "QATAR AIRWAYS",
        EY: "ETIHAD AIRWAYS",
        MS: "EGYPTAIR",
        "6E": "INDIGO",
      },
    },
  },
];

export const flightResponse20data = [
  //response
  {
    meta: {
      count: 20,
    },
    data: [
      {
        type: "flight-offer",
        id: "1",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 5,
        itineraries: [
          {
            duration: "PT14H30M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T10:00:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "4",
                  at: "2025-07-31T15:00:00",
                },
                carrierCode: "AI",
                number: "7532",
                aircraft: {
                  code: "77L",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT14H30M",
                id: "19",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "35198.00",
          base: "15225.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "35198.00",
          additionalServices: [
            {
              amount: "9393",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AI"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "35198.00",
              base: "15225.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "19",
                cabin: "ECONOMY",
                fareBasis: "SK3YXRDY",
                brandedFare: "ECOVALU",
                brandedFareLabel: "ECO VALUE",
                class: "S",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE",
                    isChargeable: true,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FREE CHECKED BAGGAGE ALLOWANCE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "2",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT24H",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T18:30:00",
                },
                arrival: {
                  iataCode: "RUH",
                  terminal: "4",
                  at: "2025-07-31T20:45:00",
                },
                carrierCode: "SV",
                number: "761",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "SV",
                },
                duration: "PT4H45M",
                id: "1",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "RUH",
                  terminal: "4",
                  at: "2025-08-01T02:50:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-08-01T09:00:00",
                },
                carrierCode: "SV",
                number: "26",
                aircraft: {
                  code: "773",
                },
                operating: {
                  carrierCode: "SV",
                },
                duration: "PT13H10M",
                id: "2",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "44463.00",
          base: "30230.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "44463.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["SV"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "44463.00",
              base: "30230.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "1",
                cabin: "ECONOMY",
                fareBasis: "QPOXINB4",
                brandedFare: "NBASICE",
                brandedFareLabel: "BASIC ECO",
                class: "Q",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGE FEE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "60 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FREE BAG 2PC 23KG",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "2",
                cabin: "ECONOMY",
                fareBasis: "QPOXINB4",
                brandedFare: "NBASICE",
                brandedFareLabel: "BASIC ECO",
                class: "Q",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGE FEE",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "60 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FREE BAG 2PC 23KG",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "3",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT20H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T07:40:00",
                },
                arrival: {
                  iataCode: "HEL",
                  at: "2025-07-31T14:15:00",
                },
                carrierCode: "AY",
                number: "122",
                aircraft: {
                  code: "333",
                },
                operating: {
                  carrierCode: "AY",
                },
                duration: "PT9H5M",
                id: "36",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "HEL",
                  at: "2025-07-31T17:15:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-07-31T19:05:00",
                },
                carrierCode: "AY",
                number: "15",
                aircraft: {
                  code: "333",
                },
                operating: {
                  carrierCode: "AY",
                },
                duration: "PT8H50M",
                id: "37",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "49624.00",
          base: "39320.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "49624.00",
          additionalServices: [
            {
              amount: "7484",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AY"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "49624.00",
              base: "39320.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "36",
                cabin: "ECONOMY",
                fareBasis: "ONN0S9CM",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "O",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "MEAL AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CARRY ON BAGGAGE",
                    isChargeable: false,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "37",
                cabin: "ECONOMY",
                fareBasis: "ONN0S9CM",
                brandedFare: "ECLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "O",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "MEAL AND BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CARRY ON BAGGAGE",
                    isChargeable: false,
                    amenityType: "TRAVEL_SERVICES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "4",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-30",
        lastTicketingDateTime: "2025-07-30",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT24H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T22:40:00",
                },
                arrival: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-08-01T06:50:00",
                },
                carrierCode: "CX",
                number: "698",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT5H40M",
                id: "5",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-08-01T09:05:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-08-01T13:15:00",
                },
                carrierCode: "CX",
                number: "830",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT16H10M",
                id: "6",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "53054.00",
          base: "33765.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "53054.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["CX"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "53054.00",
              base: "33765.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "5",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "6",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "5",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-30",
        lastTicketingDateTime: "2025-07-30",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT29H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T01:00:00",
                },
                arrival: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-07-31T09:10:00",
                },
                carrierCode: "CX",
                number: "694",
                aircraft: {
                  code: "333",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT5H40M",
                id: "7",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-07-31T16:15:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-07-31T20:35:00",
                },
                carrierCode: "CX",
                number: "840",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT16H20M",
                id: "8",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "53054.00",
          base: "33765.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "53054.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["CX"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "53054.00",
              base: "33765.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "7",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "8",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "6",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-30",
        lastTicketingDateTime: "2025-07-30",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT31H25M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T22:40:00",
                },
                arrival: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-08-01T06:50:00",
                },
                carrierCode: "CX",
                number: "698",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT5H40M",
                id: "17",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "HKG",
                  terminal: "1",
                  at: "2025-08-01T16:15:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-08-01T20:35:00",
                },
                carrierCode: "CX",
                number: "840",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "CX",
                },
                duration: "PT16H20M",
                id: "18",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "53054.00",
          base: "33765.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "53054.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["CX"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "53054.00",
              base: "33765.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "17",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "18",
                cabin: "ECONOMY",
                fareBasis: "QK21IABO",
                brandedFare: "ECONLIGHT",
                brandedFareLabel: "ECONOMY LIGHT",
                class: "Q",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "1PC MAX 23KG 158LCM EACH",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "1PC MAX 15LB 7KG 115LCM",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "7",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT40H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T07:25:00",
                },
                arrival: {
                  iataCode: "KWI",
                  terminal: "4",
                  at: "2025-07-31T09:30:00",
                },
                carrierCode: "KU",
                number: "384",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "KU",
                },
                duration: "PT4H35M",
                id: "11",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "KWI",
                  terminal: "4",
                  at: "2025-08-01T07:30:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "7",
                  at: "2025-08-01T14:00:00",
                },
                carrierCode: "KU",
                number: "117",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "KU",
                },
                duration: "PT13H30M",
                id: "12",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "57536.00",
          base: "46065.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "57536.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["KU"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "57536.00",
              base: "46065.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "11",
                cabin: "ECONOMY",
                fareBasis: "HOWIN1",
                class: "H",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "12",
                cabin: "ECONOMY",
                fareBasis: "HOWIN1",
                class: "H",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "8",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT19H45M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T03:00:00",
                },
                arrival: {
                  iataCode: "FCO",
                  terminal: "3",
                  at: "2025-07-31T08:10:00",
                },
                carrierCode: "AZ",
                number: "769",
                aircraft: {
                  code: "339",
                },
                operating: {
                  carrierCode: "AZ",
                },
                duration: "PT8H40M",
                id: "28",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "FCO",
                  terminal: "1",
                  at: "2025-07-31T09:35:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-07-31T13:15:00",
                },
                carrierCode: "AZ",
                number: "602",
                aircraft: {
                  code: "339",
                },
                operating: {
                  carrierCode: "AZ",
                },
                duration: "PT9H40M",
                id: "29",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "58866.00",
          base: "28440.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "58866.00",
          additionalServices: [
            {
              amount: "15482",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AZ"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "58866.00",
              base: "28440.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "28",
                cabin: "ECONOMY",
                fareBasis: "WCLOWIA",
                brandedFare: "ECOCLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "ADVANCE SEAT RESERVATION",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL AND WINE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "29",
                cabin: "ECONOMY",
                fareBasis: "WCLOWIA",
                brandedFare: "ECOCLASSIC",
                brandedFareLabel: "ECONOMY CLASSIC",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "ADVANCE SEAT RESERVATION",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL AND WINE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MILEAGE ACCRUAL",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "9",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT20H30M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T22:50:00",
                },
                arrival: {
                  iataCode: "YYZ",
                  terminal: "1",
                  at: "2025-08-01T05:45:00",
                },
                carrierCode: "AC",
                number: "43",
                aircraft: {
                  code: "77L",
                },
                operating: {
                  carrierCode: "AC",
                },
                duration: "PT16H25M",
                id: "20",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "YYZ",
                  terminal: "1",
                  at: "2025-08-01T08:00:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "7",
                  at: "2025-08-01T09:50:00",
                },
                carrierCode: "AC",
                number: "8552",
                aircraft: {
                  code: "E75",
                },
                operating: {
                  carrierName: "AIR CANADA EXPRESS - JAZZ",
                },
                duration: "PT1H50M",
                id: "21",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "59058.00",
          base: "28020.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "59058.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AC"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "59058.00",
              base: "28020.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "20",
                cabin: "ECONOMY",
                fareBasis: "TNCO3",
                brandedFare: "STANDARD",
                brandedFareLabel: "STANDARD",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CHECKED BAG SECOND",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "COMPLIMENTARY MEAL",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "21",
                cabin: "ECONOMY",
                fareBasis: "TNCO3",
                brandedFare: "STANDARD",
                brandedFareLabel: "STANDARD",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CHECKED BAG SECOND",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "COMPLIMENTARY MEAL",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "10",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT25H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T22:50:00",
                },
                arrival: {
                  iataCode: "YYZ",
                  terminal: "1",
                  at: "2025-08-01T05:45:00",
                },
                carrierCode: "AC",
                number: "43",
                aircraft: {
                  code: "77L",
                },
                operating: {
                  carrierCode: "AC",
                },
                duration: "PT16H25M",
                id: "38",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "YYZ",
                  terminal: "1",
                  at: "2025-08-01T13:25:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "7",
                  at: "2025-08-01T15:15:00",
                },
                carrierCode: "AC",
                number: "8554",
                aircraft: {
                  code: "E75",
                },
                operating: {
                  carrierName: "AIR CANADA EXPRESS - JAZZ",
                },
                duration: "PT1H50M",
                id: "39",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "59058.00",
          base: "28020.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "59058.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AC"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "59058.00",
              base: "28020.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "38",
                cabin: "ECONOMY",
                fareBasis: "TNCO3",
                brandedFare: "STANDARD",
                brandedFareLabel: "STANDARD",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CHECKED BAG SECOND",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "COMPLIMENTARY MEAL",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "39",
                cabin: "ECONOMY",
                fareBasis: "TNCO3",
                brandedFare: "STANDARD",
                brandedFareLabel: "STANDARD",
                class: "T",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CHECKED BAG SECOND",
                    isChargeable: true,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "COMPLIMENTARY MEAL",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BASIC SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "11",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT21H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T06:20:00",
                },
                arrival: {
                  iataCode: "IST",
                  at: "2025-07-31T10:30:00",
                },
                carrierCode: "TK",
                number: "717",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT6H40M",
                id: "3",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "IST",
                  at: "2025-07-31T14:10:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-07-31T17:55:00",
                },
                carrierCode: "TK",
                number: "1",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT10H45M",
                id: "4",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "60449.00",
          base: "27500.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "60449.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["TK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "60449.00",
              base: "27500.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "3",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "4",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "12",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT25H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T06:20:00",
                },
                arrival: {
                  iataCode: "IST",
                  at: "2025-07-31T10:30:00",
                },
                carrierCode: "TK",
                number: "717",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT6H40M",
                id: "32",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "IST",
                  at: "2025-07-31T18:45:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-07-31T22:40:00",
                },
                carrierCode: "TK",
                number: "11",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT10H55M",
                id: "33",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "60449.00",
          base: "27500.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "60449.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["TK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "60449.00",
              base: "27500.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "32",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "33",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "13",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 4,
        itineraries: [
          {
            duration: "PT20H50M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T06:35:00",
                },
                arrival: {
                  iataCode: "IST",
                  at: "2025-07-31T11:10:00",
                },
                carrierCode: "TK",
                number: "4650",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "6E",
                },
                duration: "PT7H5M",
                id: "30",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "IST",
                  at: "2025-07-31T14:10:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-07-31T17:55:00",
                },
                carrierCode: "TK",
                number: "1",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT10H45M",
                id: "31",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "64953.00",
          base: "31790.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "64953.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["TK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "64953.00",
              base: "31790.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "30",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "31",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "14",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-28",
        lastTicketingDateTime: "2025-07-28",
        numberOfBookableSeats: 4,
        itineraries: [
          {
            duration: "PT25H35M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T06:35:00",
                },
                arrival: {
                  iataCode: "IST",
                  at: "2025-07-31T11:10:00",
                },
                carrierCode: "TK",
                number: "4650",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "6E",
                },
                duration: "PT7H5M",
                id: "22",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "IST",
                  at: "2025-07-31T18:45:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "1",
                  at: "2025-07-31T22:40:00",
                },
                carrierCode: "TK",
                number: "11",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "TK",
                },
                duration: "PT10H55M",
                id: "23",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "64953.00",
          base: "31790.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "64953.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["TK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "64953.00",
              base: "31790.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "22",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "23",
                cabin: "ECONOMY",
                fareBasis: "LF2PXOW",
                brandedFare: "RS",
                brandedFareLabel: "RESTRICTED",
                class: "L",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "BAG INCLUDED",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "STANDARD SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "ONLINE MESSAGE RIGHT",
                    isChargeable: false,
                    amenityType: "ENTERTAINMENT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FRONT SEAT SELECTION",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "15",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 7,
        itineraries: [
          {
            duration: "PT32H5M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T10:25:00",
                },
                arrival: {
                  iataCode: "DOH",
                  at: "2025-07-31T11:55:00",
                },
                carrierCode: "QR",
                number: "571",
                aircraft: {
                  code: "788",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT4H",
                id: "9",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DOH",
                  at: "2025-08-01T01:45:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-08-01T09:00:00",
                },
                carrierCode: "B6",
                number: "6558",
                aircraft: {
                  code: "777",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT14H15M",
                id: "10",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "71960.00",
          base: "60035.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "71960.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["B6"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "71960.00",
              base: "60035.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "9",
                cabin: "ECONOMY",
                fareBasis: "WJR4I1SI",
                class: "S",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "10",
                cabin: "ECONOMY",
                fareBasis: "WJR4I1SI",
                class: "W",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "16",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT19H55M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T21:30:00",
                },
                arrival: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2025-07-31T23:55:00",
                },
                carrierCode: "AI",
                number: "2433",
                aircraft: {
                  code: "32N",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT2H25M",
                id: "34",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "BOM",
                  terminal: "2",
                  at: "2025-08-01T01:40:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "4",
                  at: "2025-08-01T07:55:00",
                },
                carrierCode: "AI",
                number: "119",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "AI",
                },
                duration: "PT15H45M",
                id: "35",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "72709.00",
          base: "50695.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "72709.00",
          additionalServices: [
            {
              amount: "9393",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["AI"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "72709.00",
              base: "50695.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "34",
                cabin: "ECONOMY",
                fareBasis: "WK3YXSDY",
                brandedFare: "ECOVALU",
                brandedFareLabel: "ECO VALUE",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE",
                    isChargeable: true,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FREE CHECKED BAGGAGE ALLOWANCE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "35",
                cabin: "ECONOMY",
                fareBasis: "WK3YXSDY",
                brandedFare: "ECOVALU",
                brandedFareLabel: "ECO VALUE",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  weight: 7,
                  weightUnit: "KG",
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL SERVICES",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE",
                    isChargeable: true,
                    amenityType: "UPGRADES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "FREE CHECKED BAGGAGE ALLOWANCE",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "17",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 7,
        itineraries: [
          {
            duration: "PT21H25M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T03:25:00",
                },
                arrival: {
                  iataCode: "DOH",
                  at: "2025-07-31T04:55:00",
                },
                carrierCode: "QR",
                number: "579",
                aircraft: {
                  code: "359",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT4H",
                id: "15",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DOH",
                  at: "2025-07-31T08:05:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "8",
                  at: "2025-07-31T15:20:00",
                },
                carrierCode: "B6",
                number: "6640",
                aircraft: {
                  code: "777",
                },
                operating: {
                  carrierCode: "QR",
                },
                duration: "PT14H15M",
                id: "16",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "72853.00",
          base: "40370.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "72853.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["QR"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "72853.00",
              base: "40370.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "15",
                cabin: "ECONOMY",
                fareBasis: "SJR4R1SI",
                brandedFare: "ECONVENIEN",
                brandedFareLabel: "ECONOMY CONVENIENCE",
                class: "S",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "75 PCT  QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "16",
                cabin: "ECONOMY",
                fareBasis: "SJR4R1SI",
                brandedFare: "ECONVENIEN",
                brandedFareLabel: "ECONOMY CONVENIENCE",
                class: "S",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "CABIN BAG 1 PIECE 7 KG",
                    isChargeable: false,
                    amenityType: "BAGGAGE",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: false,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "PREMIUM SEAT",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "75 PCT  QMILES ACCUMULATION",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "18",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT19H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T04:15:00",
                },
                arrival: {
                  iataCode: "DXB",
                  terminal: "3",
                  at: "2025-07-31T06:20:00",
                },
                carrierCode: "EK",
                number: "513",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "EK",
                },
                duration: "PT3H35M",
                id: "24",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DXB",
                  terminal: "3",
                  at: "2025-07-31T08:30:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "4",
                  at: "2025-07-31T14:25:00",
                },
                carrierCode: "EK",
                number: "201",
                aircraft: {
                  code: "388",
                },
                operating: {
                  carrierCode: "EK",
                },
                duration: "PT13H55M",
                id: "25",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "76185.00",
          base: "46940.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "76185.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["EK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "76185.00",
              base: "46940.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "24",
                cabin: "ECONOMY",
                fareBasis: "KLSOSIN1",
                brandedFare: "ECOFLEX",
                brandedFareLabel: "ECO FLEX",
                class: "K",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL VOUCHER",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "70 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "25",
                cabin: "ECONOMY",
                fareBasis: "KLSOSIN1",
                brandedFare: "ECOFLEX",
                brandedFareLabel: "ECO FLEX",
                class: "K",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL VOUCHER",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "70 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "19",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT24H10M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T04:15:00",
                },
                arrival: {
                  iataCode: "DXB",
                  terminal: "3",
                  at: "2025-07-31T06:20:00",
                },
                carrierCode: "EK",
                number: "513",
                aircraft: {
                  code: "77W",
                },
                operating: {
                  carrierCode: "EK",
                },
                duration: "PT3H35M",
                id: "13",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "DXB",
                  terminal: "3",
                  at: "2025-07-31T09:35:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "4",
                  at: "2025-07-31T18:55:00",
                },
                carrierCode: "EK",
                number: "205",
                aircraft: {
                  code: "388",
                },
                operating: {
                  carrierCode: "EK",
                },
                duration: "PT17H20M",
                stops: [
                  {
                    iataCode: "MXP",
                    duration: "PT2H",
                    arrivalAt: "2025-07-31T14:10:00",
                    departureAt: "2025-07-31T16:10:00",
                  },
                ],
                id: "14",
                numberOfStops: 1,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "76185.00",
          base: "46940.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "76185.00",
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["EK"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "76185.00",
              base: "46940.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "13",
                cabin: "ECONOMY",
                fareBasis: "KLSOSIN1",
                brandedFare: "ECOFLEX",
                brandedFareLabel: "ECO FLEX",
                class: "K",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL VOUCHER",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "70 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
              {
                segmentId: "14",
                cabin: "ECONOMY",
                fareBasis: "KLSOSIN1",
                brandedFare: "ECOFLEX",
                brandedFareLabel: "ECO FLEX",
                class: "K",
                includedCheckedBags: {
                  quantity: 2,
                },
                includedCabinBags: {
                  quantity: 1,
                },
                amenities: [
                  {
                    description: "PRE RESERVED SEAT ASSIGNMENT",
                    isChargeable: true,
                    amenityType: "PRE_RESERVED_SEAT",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "BEVERAGE",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "MEAL VOUCHER",
                    isChargeable: false,
                    amenityType: "MEAL",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "REFUNDABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "UPGRADE ELIGIBILITY",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "CHANGEABLE TICKET",
                    isChargeable: true,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                  {
                    description: "70 PERCENT MILES EARNED",
                    isChargeable: false,
                    amenityType: "BRANDED_FARES",
                    amenityProvider: {
                      name: "BrandedFare",
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: "flight-offer",
        id: "20",
        source: "GDS",
        instantTicketingRequired: false,
        nonHomogeneous: false,
        oneWay: false,
        isUpsellOffer: false,
        lastTicketingDate: "2025-07-31",
        lastTicketingDateTime: "2025-07-31",
        numberOfBookableSeats: 9,
        itineraries: [
          {
            duration: "PT30H40M",
            segments: [
              {
                departure: {
                  iataCode: "DEL",
                  terminal: "3",
                  at: "2025-07-31T13:45:00",
                },
                arrival: {
                  iataCode: "TAS",
                  terminal: "2",
                  at: "2025-07-31T16:15:00",
                },
                carrierCode: "HY",
                number: "424",
                aircraft: {
                  code: "763",
                },
                operating: {
                  carrierCode: "HY",
                },
                duration: "PT3H",
                id: "26",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
              {
                departure: {
                  iataCode: "TAS",
                  terminal: "2",
                  at: "2025-08-01T06:45:00",
                },
                arrival: {
                  iataCode: "JFK",
                  terminal: "4",
                  at: "2025-08-01T10:55:00",
                },
                carrierCode: "HY",
                number: "101",
                aircraft: {
                  code: "787",
                },
                operating: {
                  carrierCode: "HY",
                },
                duration: "PT13H10M",
                id: "27",
                numberOfStops: 0,
                blacklistedInEU: false,
              },
            ],
          },
        ],
        price: {
          currency: "INR",
          total: "77521.00",
          base: "39775.00",
          fees: [
            {
              amount: "0.00",
              type: "SUPPLIER",
            },
            {
              amount: "0.00",
              type: "TICKETING",
            },
          ],
          grandTotal: "77521.00",
          additionalServices: [
            {
              amount: "15482",
              type: "CHECKED_BAGS",
            },
          ],
        },
        pricingOptions: {
          fareType: ["PUBLISHED"],
          includedCheckedBagsOnly: true,
        },
        validatingAirlineCodes: ["HY"],
        travelerPricings: [
          {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
              currency: "INR",
              total: "77521.00",
              base: "39775.00",
            },
            fareDetailsBySegment: [
              {
                segmentId: "26",
                cabin: "ECONOMY",
                fareBasis: "WOST",
                class: "W",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
              {
                segmentId: "27",
                cabin: "ECONOMY",
                fareBasis: "NOST",
                class: "N",
                includedCheckedBags: {
                  quantity: 1,
                },
                includedCabinBags: {
                  quantity: 1,
                },
              },
            ],
          },
        ],
      },
    ],
    dictionaries: {
      locations: {
        BOM: {
          cityCode: "BOM",
          countryCode: "IN",
        },
        RUH: {
          cityCode: "RUH",
          countryCode: "SA",
        },
        HKG: {
          cityCode: "HKG",
          countryCode: "HK",
        },
        TAS: {
          cityCode: "TAS",
          countryCode: "UZ",
        },
        DEL: {
          cityCode: "DEL",
          countryCode: "IN",
        },
        IST: {
          cityCode: "IST",
          countryCode: "TR",
        },
        JFK: {
          cityCode: "NYC",
          countryCode: "US",
        },
        HEL: {
          cityCode: "HEL",
          countryCode: "FI",
        },
        DXB: {
          cityCode: "DXB",
          countryCode: "AE",
        },
        FCO: {
          cityCode: "ROM",
          countryCode: "IT",
        },
        YYZ: {
          cityCode: "YTO",
          countryCode: "CA",
        },
        KWI: {
          cityCode: "KWI",
          countryCode: "KW",
        },
        DOH: {
          cityCode: "DOH",
          countryCode: "QA",
        },
      },
      aircraft: {
        E75: "EMBRAER 175",
        "77L": "BOEING 777-200LR",
        "32N": "AIRBUS A320NEO",
        "773": "BOEING 777-300",
        "333": "AIRBUS A330-300",
        "388": "AIRBUS A380-800",
        "763": "BOEING 767-300/300ER",
        "787": "787  ALL SERIES PASSENGER",
        "77W": "BOEING 777-300ER",
        "359": "AIRBUS A350-900",
        "788": "BOEING 787-8",
        "777": "BOEING 777-200/300",
        "339": "AIRBUS A330-900NEO PASSENGER",
      },
      currencies: {
        INR: "INDIAN RUPEE",
      },
      carriers: {
        QR: "QATAR AIRWAYS",
        AC: "AIR CANADA",
        SV: "SAUDI ARABIAN AIRLINES",
        EK: "EMIRATES",
        AI: "AIR INDIA",
        KU: "KUWAIT AIRWAYS",
        "6E": "INDIGO",
        HY: "UZBEKISTAN AIRWAYS",
        B6: "JETBLUE AIRWAYS",
        CX: "CATHAY PACIFIC",
        TK: "TURKISH AIRLINES",
        AY: "FINNAIR",
        AZ: "ITA AIRWAYS",
      },
    },
  },
];
