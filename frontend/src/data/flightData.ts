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

export const response = [
  //response
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
