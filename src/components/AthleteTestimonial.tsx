'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteTestimonial() {
  const { language } = useLanguage()

  const testimonials = [
    {
      title: language === 'JP' ? '故郷への想い' : 'For My Hometown',
      comment: language === 'JP'
        ? '私は北海道・十勝で生まれ育ちました。自然豊かな故郷で過ごした時間が、今の私を作ってくれたと思っています。このプロジェクトでは、故郷に「Small Earth Factory」を作ることができると聞いて、すぐに参加を決めました。アスリートとして世界で戦ってきた経験を、地元の子どもたちや地域の発展に還元できる。それが私にとって一番の喜びです。'
        : "I was born and raised in Tokachi, Hokkaido. The time I spent in my hometown, surrounded by nature, shaped who I am today. When I heard this project could bring a 'Small Earth Factory' to my hometown, I decided to join right away. Being able to give back to the local children and community development through my experience competing on the world stage—that's what brings me the greatest joy."
    },
    {
      title: language === 'JP' ? '地球と未来への恩返し' : 'Giving Back to Earth & Future',
      comment: language === 'JP'
        ? 'アスリートとして、体が資本だからこそ、自然の力や地球の恵みに支えられてきたことを実感しています。35億年前から続く生命の力を持つマザーベジタブル。このプロジェクトを通じて、地球環境を守りながら、次世代のアスリートや若者たちが健康に成長できる未来を作りたい。私が受け取ったものを、地球と未来に返していきたいんです。'
        : "As an athlete, my body is everything—and I've come to realize how much I've been supported by the power of nature and the blessings of the Earth. Mother Vegetable carries the life force that has existed for 3.5 billion years. Through this project, I want to protect our environment while creating a future where the next generation of athletes and young people can grow up healthy. I want to give back to the Earth and the future what I've received."
    },
  ]

  return (
    <section className="py-5 md:py-5 bg-black">
      <div
        className="mx-auto px-4 md:px-8 py-8 md:py-12 w-[97%] md:w-[90%]"
        style={{
          maxWidth: '1500px',
          border: '2px solid #25c760',
          borderRadius: '8px',
        }}
      >
        {/* Title */}
        <h2
          className="text-xl md:text-5xl font-bold text-center mb-2 md:mb-4"
          style={{ color: '#25c760' }}
        >
          Voice
        </h2>

        <div className="w-32 md:w-48 h-1 md:h-1.5 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mt-4 md:mt-6 mb-6 md:mb-12 opacity-80"></div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 md:p-6 flex flex-col"
              style={{ border: '1px solid #25c760' }}
            >
              <h4
                className="text-base md:text-xl font-bold mb-3 md:mb-4"
                style={{ color: '#25c760' }}
              >
                {item.title}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed flex-1">
                「{item.comment}」
              </p>
              <div className="mt-4 text-right">
                <p className="text-[#25c760] text-xs md:text-sm font-semibold">
                  {language === 'JP' ? '永原 和可那' : 'Wakana Nagahara'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
