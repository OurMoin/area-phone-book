data = {
    "2022-04-02": {
      "ramadan": "০১",
      "date": "০৩ এপ্রিল ২০২২",
      "day": "রবিবার",
      "sahri": "৪.২৬",
      "iftar": "৬.১৮"
    },
    "2022-04-03": {
      "ramadan": "০১",
      "date": "০৩ এপ্রিল ২০২২",
      "day": "রবিবার",
      "sahri": "৪.২৬",
      "iftar": "৬.১৮"
    }
  }
  
  today = new Date().toISOString().split('T')[0]
  todays_data = data[today]
  
  $("#ramadan").text(todays_data.ramadan)
  $("#date").text(todays_data.date)
  $("#day").text(todays_data.day)
  $("#sahri").text(todays_data.sahri)
  $("#iftar").text(todays_data.iftar)
  