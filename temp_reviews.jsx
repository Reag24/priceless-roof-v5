const allReviews = [
  {
    name: "Andrew M.",
    text: "We had an absolutely nominal experience working with Reagan and Jeff from Priceless home improvements! They were absolute professionals the entire time, the crew is only at our house for about six or seven hours to get the whole roof done. We couldn't be happier with the service and the quality of work that they did. Highly recommend them to anyone looking to get a new roof!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a month ago"
  },
  {
    name: "Diane Bailey-Beger",
    text: "This is a great company to work with to replace a roof. They handled working with my insurance company very professionally, making it practically seamless. The crew who actually did all the installation were wonderful. Did it all in 1 day and left my property that night completely without the job's debris. I highly recommend.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "9 months ago"
  },
  {
    name: "Benjamin Allman",
    text: "Rob and his team were brilliant to work with! I got their contact information from a friend who was pleased with their work, and Rob was super responsive. He showed up the next day after we spoke and gave a thorough assessment to us. The thing that stood out the most was that he gave us the truth about not needing repairs but rather just some paint in area where we had experienced leak damage. Other companies would have tried to swindle us into paying them for unnecessary repairs, but Rob's honesty saved us time and money. Between the responsiveness, thoroughness, and character of Rob & his team, I could not recommend them enough to anyone in the Sneads Ferry or Jacksonville area that needs roof repair services!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "John McIntyre",
    text: "I connected with Priceless Home Improvement through a referral when I was looking for a contractor for a new roof. I was impressed with Rob Swaim, project manager, from my first phone conversation with him. He educated me about my options and explained the insurance claim process (I had no idea this was possible). I assumed I had to pay for a new roof out of pocket, and it turns out I was able to get a $15K+ roof for just my $2500 deductible! Rob and his team took care of all aspects of the process, from the insurance claim details, to inspections, to coordination of the roofing crew, to full clean up. I am overjoyed that he was able to upgrade my roof to a fully fortified one through a grant from the NCIUA since my policy included the appropriate endorsement - living in coastal NC with frequent hurricanes, this is a massive upgrade! From start to finish, Rob and his team, including Russell the foreman, and Eduardo and his amazing crew of roofing technicians, exhibited professionalism, experience, and expertise. They kept me in the loop every step of the way, there were never any surprises, and Rob responded promptly every time I had a question. When I say professionalism from start to finish, I mean it - when the roof was completed, crew members spent several hours going over my yard with a fine tooth comb picking up stray nails and debris, they left my property looking better than they found it. I truly can't recommend Rob Swaim and his crew from Priceless Home Improvement strongly enough. Call them, you'll be glad you did. -John M.",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "Amy Focer",
    text: "Very easy process from start to finish. From initial contact to finished product, it was way quicker than I expected. Rob was my point of contact. He assisted with all aspects of the process & it ran seamlessly. There was very minimal work on my end. Would recommend without hesitation!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "a year ago"
  },
  {
    name: "Laura Green",
    text: "Our whole process with Rob was smooth from start to finish, highly recommended!",
    rating: 5,
    location: "Wilmington, NC",
    timeAgo: "4 months ago"
  }
];

const reviews = allReviews.filter(review => review.location === "Wilmington, NC");

// Review Card Component with Read More functionality
const ReviewCard = ({ review, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200; // Characters to show before "Read More"
  
  const shouldTruncate = review.text.length > maxLength;
  const displayText = shouldTruncate && !isExpanded 
    ? review.text.substring(0, maxLength) + "..."
    : review.text;

  return (
    <Card key={index} className="hover:shadow-lg transition-shadow" id={index === 0 ? "reviews-section" : undefined}>
      <CardContent className="pt-6">
        <div className="flex items-center space-x-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          ))}
          {review.timeAgo && (
            <span className="ml-2 text-sm text-gray-500">• {review.timeAgo}</span>
          )}
        </div>
        <p className="text-xl text-muted-foreground mb-4 italic">"{displayText}"</p>
        {shouldTruncate && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary hover:text-primary/80 font-semibold mb-4 text-lg"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        )}
        <p className="text-xl font-semibold">- {review.name}</p>
      </CardContent>
    </Card>
  );
};

const images = [house1, house2, house3, house4, house5, house6];

