'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function AthleteTestimonial() {
  const { language } = useLanguage()

  const testimonials = [
    {
      product: 'Achieve',
      comment: language === 'JP'
        ? '試合が続くと、どうしても体が重くなったり、疲れが抜けにくくなるんです。でもAchieveを飲み始めてから、朝の目覚めが全然違う。48種類の栄養が一度に摂れるから、サプリをあれこれ考えなくていいのも楽ですね。遠征先でも手軽に栄養補給できるので、今では手放せない存在になっています。'
        : "When matches pile up, my body gets heavy and fatigue just won't go away. But since I started taking Achieve, my mornings feel completely different. Getting 48 nutrients at once means I don't have to think about which supplements to take. It's easy to use even when traveling for tournaments—now I can't imagine being without it."
    },
    {
      product: 'Confidence',
      comment: language === 'JP'
        ? '正直、練習や試合で汗だくになる毎日で、スキンケアなんて後回しになりがちでした。でもConfidenceは塗るだけでいいから続けられる。気づいたら肌の調子が良くなっていて、メイクしなくても「肌きれいだね」って言われるようになりました。アスリートでも女性としてきれいでいたい、その気持ちを叶えてくれています。'
        : "Honestly, with all the sweating from practice and matches every day, skincare always took a back seat. But Confidence is so simple—just apply it and you're done. Before I knew it, my skin got better, and people started saying my skin looks great even without makeup. It lets me feel beautiful as a woman, even as an athlete."
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
                {item.product}
              </h4>
              <p className="text-gray-300 text-xs md:text-sm leading-relaxed flex-1">
                「{item.comment}」
              </p>
              <div className="mt-4 text-right">
                <p className="text-[#25c760] text-xs md:text-sm font-semibold">
                  {language === 'JP' ? '永原 和可那' : 'Wakana Nagahara'}
                </p>
                <p className="text-gray-400 text-[10px] md:text-xs">
                  {language === 'JP' ? 'バドミントン世界選手権 2連覇' : '2-TIME WORLD BADMINTON CHAMPION'}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
