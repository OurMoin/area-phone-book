const categoryData = [
    {
      id: 1,
      photo: "../resources/icons/emergency-services.png",
      name: "জরুরী সেবা",
      subCategory:
        [
          {
            name: "এ্যাম্বুলেন্স",
            link: "ambulance.html"
          },
          {
            name: "হাঁসপাতাল",
            link: "hospital.html"
          },
          {
            name: "ফায়ার সার্ভিস",
            link: "fire-service.html"
          },
          {
            name: "পুলিশ স্টেশন",
            link: "police-station.html"
          },
          {
            name: "বিদ্যুৎ অফিস",
            link: "electricity-office.html"
          },
          {
            name: "গ্যাস অফিস",
            link: "gas-office.html"
          },
          {
            name: "পানি অফিস",
            link: "water-office.html"
          },
          {
            name: "গাড়ি ভাড়া",
            link: "car-rental.html"
          }
        ]
    },
    {
      id: 2,
      photo: "../resources/icons/medical-services.png",
      name: "চিকিৎসা সেবা",
      subCategory:
        [
          {
            name: "ফার্মেসী",
            link: "pharmacy.html"
          },
          {
            name: "হোমিওপ্যাথি",
            link: "homeopathy.html"
          },
          {
            name: "ডাক্তার বসেন",
            link: "doctor-sat-down.html"
          },
          {
            name: "ডাক্তার ল্যাব",
            link: "doctor-lab.html"
          }
        ]
    },
    {
      id: 3,
      photo: "../resources/icons/training-center.png",
      name: "প্রশিক্ষণ কেন্দ্র",
      subCategory:
        [
          {
            name: "কম্পিউটার ট্রেনিং",
            link: "computer-training.html"          
          },
          {
            name: "ড্রাইভিং ট্রেনিং",
            link: "driving-training.html"         
           },
          {
            name: "ভাষা ট্রেনিং",
            link: "language-training.html"         
           },
          {
            name: "স্কিল ট্রেনিং",
            link: "skill-training.html"            
          },
          {
            name: "ইলিক্টিক ট্রেনিং",
            link: "electrical-training.html"              
          },
          {
            name: "ওয়ার্কসপ ট্রেনিং",
            link: "workshop-training.html"              
          },
          {
            name: "ট্রেইলারিং ট্রেনিং",
            link: "trailing-training.html"              
          },
          {
            name: "এসি/ফ্রিজ সার্ভিসিং ট্রেনিং",
            link: "ac-fridge-servicing-training.html"              
          },
          {
            name: "পার্লার ট্রেনিং",
            link: "parlor.html"              
          },
          {
            name: "Gym",
            link: "gym.html"              
          }
        ]
    },
    {
      id: 4,
      photo: "../resources/icons/banking-services.png",
      name: "ব্যাংকিং সেবা",
      subCategory:
        [
          {
            name: "ব্যাংক",
            link: "bank.html"
          },
          {
            name: "এজেন্ট ব্যাংক",
            link: "agent-bank.html"
          },
          {
            name: "কিস্তি অফিস",
            link: "installment-office.html"
          }
        ]
    },
    {
      id: 5,
      photo: "../resources/icons/education-services.png",
      name: "শিক্ষা সেবা",
      subCategory:
        [
          {
            name: "স্কুল",
            link: "school.html"
          },
          {
            name: "কোচিং সেন্টার",
            link: "coaching-center.html"
          },
          {
            name: "লাইব্রেরি",
            link: "library.html"
          },
          {
            name: "কলেজ",
            link: "college.html"
          },
          {
            name: "মাদ্রসা",
            link: "madrasa.html"
          },
          {
            name: "হোম টিচার",
            link: "home-teacher.html"
          },
          {
            name: "শিক্ষা প্রতিষ্ঠানের সকল সেবা",
            link: "all-services-of-educational-institutions.html"
          }
        ]
    },
    {
      id: 6,
      photo: "../resources/icons/shop.png",
      name: "দোকান",
      subCategory:
        [
          {
            name: "সুপার সপ",
            link: "super-shop.html"
          },
          {
            name: "মিনি সুপার সপ",
            link: "mini-super-shop.html"
          },
          {
            name: "পাইকারী দোকান",
            link: "wholesale-store.html"
          },
          {
            name: "মুদি দোকান",
            link: "grocery-store.html"
          },
          {
            name: "কনফেকশনারী",
            link: "confectionary.html"
          },
          {
            name: "ফলের দোকান",
            link: "fruit-shop.html"
          },
          {
            name: "মশলার দোকান",
            link: "spice-shop.html"
          },
          {
            name: "হার্ডওয়্যার",
            link: "hardware.html"
          },
          {
            name: "লাইব্রেরি",
            link: "library.html"
          },
          {
            name: "ফুলের দোকান",
            link: "flower-shop.html"
          }
        ]
    },
    {
      id: 7,
      photo: "../resources/icons/parlor-salon.png",
      name: "পার্লার / সেলুন",
      subCategory:
        [
          {
            name: "পার্লার",
            link: "parlor.html"
          },
          {
            name: "সেলুন",
            link: "salon.html"
          },
          {
            name: "কসমিটিক্স এর দোকান",
            link: "cosmetics-shop.html"
          }
        ]
    },
    {
      id: 8,
      photo: "../resources/icons/studio-computer-shop.png",
      name: "স্টুডিও / কম্পিউটার দোকান",
      subCategory:
        [
          {
            name: "স্টুডিও",
            link: "studio.html"
          },
          {
            name: "কম্পিউটার দোকান",
            link: "computer-shop.html"
          },
          {
            name: "লাইব্রেরি",
            link: "library.html"
          },
          {
            name: "ক্যামেরামেন",
            link: "cameraman.html"
          }
        ]
    },
    {
      id: 9,
      photo: "../resources/icons/car-stand.png",
      name: "গাড়ী স্ট্যান্ড",
      subCategory:
        [
          {
            name: "সিএনজি স্ট্যান্ড",
            link: "cng-stand.html"
          },
          {
            name: "বাস স্ট্যান্ড",
            link: "bus-stand.html"
          },
          {
            name: "ট্রেন স্টেশন",
            link: "train-station.html"
          },
          {
            name: "অটো স্ট্যান্ড",
            link: "auto-stand.html"
          }
        ]
    },
    {
      id: 10,
      photo: "../resources/icons/transportation-services.png",
      name: "পরিবহন সেবা",
      subCategory:
        [
          {
            name: "পেট্রোল পাম্প",
            link: "petrol-pump.html"
          },
          {
            name: "রেন্ট এ কার",
            link: "rent-a-car.html"
          },
          {
            name: "পিকাপ",
            link: "pickup.html"
          },
          {
            name: "ট্রাক",
            link: "truck.html"
          },
          {
            name: "ডিস্টিক ট্রাক",
            link: "district-truck.html"
          },
          {
            name: "সিএনজি",
            link: "cng.html"
          },
          {
            name: "ভ্যান গাড়ি",
            link: "van.html"
          },
          {
            name: "জলযান",
            link: "watercraft.html"
          }
        ]
    }
  ];
  