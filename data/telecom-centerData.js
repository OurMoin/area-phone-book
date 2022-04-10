const userData = [
  {
    id: 1,
    photo: "../cdn/telecom-center/arsad-telecom.jpg",
    name: "আরসাদ টেলিকম",
    number: "01811114551",
    wordNo: "৪",
    location: "নুরবাগ ভুইগড় রোড, নুরবাগ",
    detail: "বিকাশ, রকেট এবং নিত্য প্রয়োজনীয় ইলেকট্রিক পন্য পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 2,
    photo: "../cdn/telecom-center/maa-telecom.jpg",
    name: "Maa Telecom",
    number: "01923339944",
    wordNo: "৪",
    location: "কুসুমবাগ",
    detail: "Dutch-Bangla bank agent banking service.",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 3,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "Rifat Telecom Centre",
    number: "01621819131",
    wordNo: "৪",
    location: "এসএম সুপার মার্কেট",
    detail: "মোবাইল ফোন, এক্সেসরিজ, বিকাশ ও ফোন রিচার্জ করা হয়।",
    postLink: "ornobislamrifat@gmail.com",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 4,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "রুজি টেলিকম",
    number: "01718106400",
    wordNo: "৬",
    location: "আল নাসিব সুপার মার্কেট, পাগলা বাজার",
    detail: "সকল প্রকার হারানো ও নষ্ট সিম তোলা হয়। বিকাশ, নগদ, রকেট, উপায় এর মাধ্যমে টাকা আদান প্রদান করা হয়।",
    postLink: "sayem8768@gmail.com",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 5,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "ফাতেমা টেলিকম এন্ড কম্পিউটার",
    number: "01911906734",
    wordNo: "৭",
    location: "আলীগঞ্জ, মধ্য পাড়া",
    detail: "মোবাইল ব্যংকিং,টপ আপ,ফটোকপি,টাইপিং,লেমোনেটিং,ছবি তোলা, বিদ্যুৎ বিল, গ্যাস বিল ,জন্ম নিবন্ধন, এন আইডি, বিশ্ব বিদ্যালয়ে ভর্তি ইত্যাদি অনলাইন আবেদন করা হয়।",
    postLink: "gazigolap25@gmail.com",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 6,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "জান্নাত লাইব্রেরি এন্ড টেলিকম সেন্টার",
    number: "01624214577",
    wordNo: "৫",
    location: "শাহী বাজার, আমতলা মোড়",
    detail: "লাইব্রেরী সকল কিছু, ফোটো কপি, প্রিন্টিং এবং বিকাশ, নগদ মোবাইল ব্যাংকিং এর সকল সেবা দেওয়া হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 7,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "It Zone Library",
    number: "01913255077",
    wordNo: "৬",
    location: "নয়ামাটি",
    detail: "কম্পিউটার প্রশিক্ষণ ফটোকপি বিকাশ, রকেট, নগদ রিচার্জ ও অনলাইন এর কাজ করা হয়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  },
  {
    id: 8,
    photo: "../cdn/telecom-center/telecom-center.png",
    name: "মারুফা টেলিকম সেন্টার",
    number: "01910254846 ",
    wordNo: "৬",
    location: "প্যারাডাইস সিটি, রেল স্টেশনের পশ্চিম পাশে ",
    detail: "Aziulhaque4846@gmail.com<br> বিকাশ, নগদ, রকেট, মোবাইল রিচার্জ, কার্ড মিটার রিচার্জ, চার্জার, হেডফোন, ব্যাটারি ইত্যাদি পাওয়া যায়।",
    postLink: "http://fb.com/areaPhonebook",
    videoLink: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fyiralcrazy%2Fvideos%2F614052535735551%2F&width=500&show_text=false&height=280&appId"
  }
];
