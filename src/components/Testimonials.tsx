import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    date: "October 4, 2023",
    image: "https://i.pravatar.cc/150?u=sarah",
    rating: 5,
    text: "I used to be terrified of the dentist, but Dr. Lekota completely changed that. The process was entirely pain-free, and I felt so comfortable."
  },
  {
    id: 2,
    name: "Thabo K.",
    date: "August 4, 2023",
    image: "https://i.pravatar.cc/150?u=thabo",
    rating: 5,
    text: "The clinic in Tramshed is beautifully modern. I had a crown fitted, and the technology they use made it so quick and easy."
  },
  {
    id: 3,
    name: "Elena R.",
    date: "June 11, 2023",
    image: "https://i.pravatar.cc/150?u=elena",
    rating: 5,
    text: "Took my 5-year-old for her first checkup. The staff was incredibly gentle and patient. She actually left with a smile on her face."
  },
  {
    id: 4,
    name: "David N.",
    date: "March 30, 2023",
    image: "https://i.pravatar.cc/150?u=david",
    rating: 5,
    text: "Broke a tooth over the weekend and they saw me on Monday morning for an emergency appointment. Fast, professional, and saved my tooth."
  },
  {
    id: 5,
    name: "Lerato M.",
    date: "December 9, 2022",
    image: "https://i.pravatar.cc/150?u=lerato",
    rating: 5,
    text: "Very nice environment and professional people! Dr. Lekota is simply the best dentist I have ever visited in Pretoria."
  },
  {
    id: 6,
    name: "Johan S.",
    date: "December 5, 2022",
    image: "https://i.pravatar.cc/150?u=johan",
    rating: 5,
    text: "Wonderful place, awesome company culture. Recommended for anyone seeking high-quality dental care."
  }
];

export function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-[#f3f4f6] dark:bg-gray-900 border-y border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="bg-[#fcf8f8] dark:bg-gray-800 rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-sm mb-20">
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex items-center">
                 {/* Google Logo text */}
                 <span className="text-2xl font-bold tracking-tighter">
                   <span className="text-[#4285F4]">G</span>
                   <span className="text-[#EA4335]">o</span>
                   <span className="text-[#FBBC05]">o</span>
                   <span className="text-[#4285F4]">g</span>
                   <span className="text-[#34A853]">l</span>
                   <span className="text-[#EA4335]">e</span>
                 </span>
              </div>
              <span className="text-xl font-medium text-gray-700 dark:text-gray-300">Rating</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-bold text-2xl text-gray-900 dark:text-white">4.9</span>
              <div className="flex text-[#FBBC05]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-current text-[#FBBC05] stroke-none" />
                ))}
              </div>
              <span className="text-gray-600 dark:text-gray-400 font-medium">Based on <span className="font-bold text-gray-900 dark:text-white">150+</span> Reviews</span>
            </div>
          </div>
          <a href="#" className="bg-[#4285F4] hover:bg-[#3367D6] text-white font-medium px-8 py-3 rounded-full transition-colors shadow-sm">
            Write a Review
          </a>
        </div>

        {/* Grid of Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-16">
          {testimonials.map((review) => (
            <div key={review.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm p-8 pt-14 relative text-center">
              {/* Google G icon */}
              <div className="absolute top-5 left-5">
                <svg viewBox="0 0 24 24" width="22" height="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>

              {/* Profile Image (Overlapping top) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <img 
                  src={review.image} 
                  alt={review.name}
                  className="w-24 h-24 rounded-full border-[6px] border-white dark:border-gray-800 object-cover shadow-sm bg-white"
                />
              </div>

              {/* Content */}
              <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">{review.name}</h4>
              <div className="flex justify-center text-[#FBBC05] mb-2 gap-1">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-current text-[#FBBC05] stroke-none" />
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{review.date}</p>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                {review.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
