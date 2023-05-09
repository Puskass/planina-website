// Reqs
const express = require("express");

exports.getTours = (request, response) => {
  const tours = [
    {
      name: "Mount Everest Base Camp",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.dailymail.co.uk%2Fi%2Fpix%2F2015%2F04%2F27%2F15%2F2810F14200000578-3057605-image-a-5_1430146066861.jpg&f=1&nofb=1&ipt=33f28b981c4320e6a4de6eb213e110a11c147191a88e562c9e9591456fc0cc6e&ipo=images",
      date: "2023-10-01",
      description:
        "Experience the breathtaking views of Mount Everest as you trek to its base camp. This 16-day trekking journey takes you through beautiful mountain landscapes and Sherpa villages.",
      condition: "K3",
      technique: "T3",
      guide: "John Smith",
      price: 2500,
    },
    {
      name: "Kilimanjaro Trek",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnews.kisspr.com%2Fsystem%2Fposts%2Fimages%2F000%2F013%2F724%2Flarge%2Fe-exclusive-mandy-moore-climbed-mount-kilimanjaro.jpg&f=1&nofb=1&ipt=4b4283c9cb9cc5ae7927c4f515c31d3981ad66005d49640a906fd6299a1ac6d0&ipo=images",
      date: "2024-01-15",
      description:
        "Trek to the top of the highest mountain in Africa! This 7-day trekking adventure takes you through beautiful forests, moorlands, and alpine deserts before reaching the snow-capped summit.",
      condition: "K2",
      technique: "T2",
      guide: "Anna Lee",
      price: 1800,
    },
    {
      name: "Mont Blanc Summit",
      image:
        "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fd3rrfy0o57uet0.cloudfront.net%2Fwp-content%2Fuploads%2F2017%2F08%2FMt-Blanc_Mihnea-pic.jpg&f=1&nofb=1&ipt=8727632307a7e17294731a71f8df06426f9b54383c3f59a2de67c150ee6c9d76&ipo=images",
      date: "2024-07-01",
      description:
        "Climb the highest peak in the Alps and experience stunning views of France, Italy, and Switzerland. This 8-day mountaineering expedition takes you through beautiful glaciers and rock formations before reaching the summit.",
      condition: "K4",
      technique: "T4",
      guide: "Mike Johnson",
      price: 3500,
    },
    {
      name: "Patagonia Trek",
      image:
        "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?b=1&s=170667a&w=0&k=20&c=D0etCDylQ3XZFqnKD-9k_EVge1SI7Cy3Sr2-jIilukU=",
      date: "2023-12-01",
      description:
        "Explore the beautiful wilderness of Patagonia on foot. This 12-day trekking adventure takes you through stunning landscapes and wildlife before reaching the famous Torres del Paine national park.",
      condition: "K3",
      technique: "T2",
      guide: "Sara Garcia",
      price: 2800,
    },
    {
      name: "Alps Mountaineering",
      image:
        "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?b=1&s=170667a&w=0&k=20&c=D0etCDylQ3XZFqnKD-9k_EVge1SI7Cy3Sr2-jIilukU=",
      date: "2024-08-15",
      description:
        "Experience the thrill of mountaineering in the beautiful Alps. This 10-day expedition takes you through some of the most challenging peaks in the region, with stunning views at every step.",
      condition: "K4",
      technique: "T4",
      guide: "Tom Smith",
      price: 4200,
    },
    {
      name: "Himalayan Trekking",
      image:
        "https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?b=1&s=170667a&w=0&k=20&c=D0etCDylQ3XZFqnKD-9k_EVge1SI7Cy3Sr2-jIilukU=",
      date: "2024-04-01",
      description:
        "Explore the stunning landscapes and cultures of the Himalayas. This 14-day trekking journey takes you through beautiful forests, high passes, and remote villages before reaching the stunning Annapurna Base Camp.",
      condition: "K3",
      technique: "T3",
      guide: "David Kim",
      price: 3200,
    },
  ];

  response.send(tours);
};
