const categoryData = [  
  
    {
      id: 1,
      photo: "../cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "পাবলিক বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [        
          {
            name: "ঢাকা বিশ্ববিদ্যালয়",
            link: "www.du.ac.bd"
          },
          {
            name: "রাজশাহী বিশ্ববিদ্যালয়",
            link: "www.ru.ac.bd"
          },
          {
            name: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
            link: "www.juniv.edu"
          },
          {
            name: "বাংলাদেশ কৃষি বিশ্ববিদ্যালয়",
            link: "www.bau.edu.bd"
          },
          {
            name: "বাংলাদেশ প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.buet.ac.bd"
          },
          {
            name: "চট্টগ্রাম বিশ্ববিদ্যালয়",
            link: "www.cu.ac.bd"
          },
          {
            name: "ইসলামী বিশ্ববিদ্যালয়, বাংলাদেশ",
            link: "www.iu.ac.bd"
          },
          {
            name: "শাহজালাল বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.sust.edu"
          },
          {
            name: "খুলনা বিশ্ববিদ্যালয়",
            link: "www.ku.ac.bd"
          },
          {
            name: "বাংলাদেশ উন্মুক্ত বিশ্ববিদ্যালয়",
            link: "www.bou.ac.bd"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়",
            link: "www.bsmmu.edu.bd"
          },
          {
            name: "বঙ্গবন্ধু শেখ মুজিবুর রহমান কৃষি বিশ্ববিদ্যালয়",
            link: "www.bsmrau.edu.bd"
          },
          {
            name: "হাজী মোহাম্মদ দানেশ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.hstu.ac.bd"
          },
          {
            name: "মাওলানা ভাসানী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.mbstu.ac.bd"
          },
          {
            name: "পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.pstu.ac.bd"
          },
          {
            name: "শেরেবাংলা কৃষি বিশ্ববিদ্যালয়",
            link: "www.sau.edu.bd"
          },
          {
            name: "চট্টগ্রাম প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.cuet.ac.bd"
          },
          {
            name: "রাজশাহী প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.ruet.ac.bd"
          },
          {
            name: "খুলনা প্রকৌশল ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.kuet.ac.bd"
          }
        ]
    },  
    {
      id: 2,
      photo: "../cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "প্রাইভেট বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [
          {
            name: "নর্থ সাউথ ইউনিভার্সিটি",
            link: "www.northsouth.edu"
          },
          {
            name: "বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় চট্টগ্রাম",
            link: "www.ustc.edu.bd"
          },
          {
            name: "ইন্ডিপেনডেন্ট ইউনিভার্সিটি, বাংলাদেশ",
            link: "www.iub.edu.bd"
          },
          {
            name: "সেন্ট্রাল উইমেন্স ইউনিভার্সিটি",
            link: "www.cwu.edu.bd"
          },
          {
            name: "ইন্টারন্যাশনাল ইউনিভার্সিটি অফ বিজনেস এগ্রিকালচার অ্যান্ড টেকনোলজি",
            link: "www.iubat.edu"
          },
          {
            name: "আন্তর্জাতিক ইসলামী বিশ্ববিদ্যালয় চট্টগ্রাম",
            link: "www.iiuc.ac.bd"
          },
          {
            name: "আহসানউল্লাহ বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয়",
            link: "www.aust.edu"
          },
          {
            name: "আমেরিকান ইন্টারন্যাশনাল ইউনিভার্সিটি-বাংলাদেশ",
            link: "www.aiub.edu"
          },
          {
            name: "ইস্ট ওয়েস্ট ইউনিভার্সিটি",
            link: "www.ewubd.edu"
          },
          {
            name: "ইউনিভার্সিটি অব এশিয়া প্যাসিফিক",
            link: "www.uap-bd.edu"
          },
          {
            name: "গণ বিশ্ববিদ্যালয়",
            link: "www.gonouniversity.edu.bd"
          },
          {
            name: "দ্য পিপলস ইউনিভার্সিটি অব বাংলাদেশ",
            link: "www.pub.ac.bd"
          },
          {
            name: "এশিয়ান ইউনিভার্সিটি অব বাংলাদেশ",
            link: "www.aub.edu.bd"
          },
          {
            name: "ঢাকা ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.diu.ac"
          },
          {
            name: "মানারাত ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.manarat.ac.bd"
          },
          {
            name: "ব্র্যাক বিশ্ববিদ্যালয়",
            link: "www.bracu.ac.bd"
          },
          {
            name: "বাংলাদেশ ইউনিভার্সিটি",
            link: "www.bu.edu.bd"
          },
          {
            name: "লিডিং বিশ্ববিদ্যালয়",
            link: "www.lus.ac.bd"
          },
          {
            name: "বিজিসি ট্রাস্ট ইউনিভার্সিটি বাংলাদেশ",
            link: "www.bgctub.ac.bd"
          },
          {
            name: "সিলেট ইন্টারন্যাশনাল ইউনিভার্সিটি",
            link: "www.siu.edu.bd"
          }
        ]
    },
    {
      id: 3,
      photo: "../cdn/universities/university-grants-commission-of-bangladesh.png",
      name: "ন্যাশনাল বিশ্ববিদ্যালয়",
      pageLink: "#",
      subCategory:
        [
          {
            name: "ইসলামিক ইউনিভার্সিটি অব টেকনোলজি, গাজীপুর",
            link: "www.iutoic-dhaka.edu"
          },
          {
            name: "এশিয়ান ইউনিভার্সিটি ফর উইমেন",
            link: "www.auw.edu.bd"
          },
          {
            name: "সাউথ এশিয়ান ইউনিভার্সিটি",
            link: "www.southasianuniversity.org"
          }
        ]
    }
  ];
    
  