data = {
    "2022-04-02": {
      "date": "০৩ এপ্রিল ২০২২",
      "ramadan": "০১",
      "day": "রবিবার",
      "sahri": "৪.৩২",
      "iftar": "৬.১০"
    },
    "2022-04-03": {
        "date": "০৩ এপ্রিল ২০২২",
        "ramadan": "০১",
        "day": "রবিবার",
        "sahri": "৪.৩২",
        "iftar": "৬.১০"
    }
  }
  
  today = new Date().toISOString().split('T')[0]
  todays_data = data[today]
  
  $("#ramadan").text(todays_data.ramadan)
  $("#date").text(todays_data.date)
  $("#day").text(todays_data.day)
  $("#sahri").text(todays_data.sahri)
  $("#iftar").text(todays_data.iftar)
  