'use client'

import { useLanguage } from '@/contexts/LanguageContext'

export default function ProjectOverview() {
  const { t } = useLanguage()
  return (
    <section id="project-overview" className="py-32 bg-black">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-green-500/20 border border-green-500/50 text-green-400 px-4 py-2 rounded-full text-sm mb-12">
            {t({ JP: '1. エグゼクティブサマリー', EN: '1. Executive Summary' })}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t({ JP: '２つのオンリーワン', EN: 'Two Only Ones' })}
          </h2>
          <div className="text-xs md:text-base text-gray-300 max-w-5xl mx-auto">
            {/* Desktop View */}
            <p className="hidden md:block leading-[2] whitespace-pre-line">
              {t({
                JP: `MOTHER VEGETABLE PROJECTは\n2つのオンリーワン事業を中心として地球とすべての生命の回復・修正を目指す画期的なプロジェクトです。\n\nこのプロセスにおいて、各施設は24時間365日CO2を吸収し酸素を生成することで大気を浄化し、\n同時に生成されるマザーベジタブル製品および魚貝類の養殖業により、人間と生物の健康向上に貢献します。\n\nまたその施設を世界各地に展開することで、さらに8つの産業分野に発展します。`,
                EN: `The MOTHER VEGETABLE PROJECT is\na groundbreaking initiative that aims to restore and revitalize the Earth and all forms of life,\ncentered around two one-of-a-kind core businesses.\n\nThrough this process, each facility operates 24 hours a day, 365 days a year, absorbing CO₂\nand generating oxygen to purify the atmosphere.\nAt the same time, the production of Mother Vegetable products and the aquaculture of fish and shellfish\ncontribute to improving the health of both humans and other living beings.\n\nFurthermore, by expanding these facilities around the world,\nthe project will evolve into eight additional industrial sectors.`
              })}
            </p>

            {/* Mobile View */}
            <p className="block md:hidden leading-[2] whitespace-pre-line">
              {t({
               JP: `MOTHER VEGETABLE PROJECTは\n2つのオンリーワン事業を中心として\n地球とすべての生命の回復・修正を目指す\n画期的なプロジェクトです。\n\nこのプロセスにおいて、各施設は24時間365日\nCO2を吸収し酸素を生成することで大気を浄化し、\n同時に生成されるマザーベジタブル製品\nおよび魚貝類の養殖業により、\n人間と生物の健康向上に貢献します。\n\nまたその施設を世界各地に展開することで、\nさらに8つの産業分野に発展します。`,
                EN: `The MOTHER VEGETABLE PROJECT is\na groundbreaking initiative that aims to restore\nand revitalize the Earth and all forms of life,\ncentered around two one-of-a-kind core businesses.\n\nThrough this process,\neach facility operates 24 hours a day,\n365 days a year, absorbing CO₂\nand generating oxygen\nto purify the atmosphere.\nAt the same time, the production of\nother Vegetable products\nand the aquaculture of fish and shellfish\ncontribute to improving the health of both\nhumans and other living beings.\n\nFurthermore, by expanding\nthese facilities around the world,\nthe project will evolve into\neight additional industrial sectors.`
              })}
            </p>
          </div>
        </div>

        {/* Main Content - Single Block */}
        <div className="bg-gray-900/50 backdrop-blur-md border border-green-500/20 rounded-xl p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - 01 */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0  opacity-50"></div>
                  <div className="relative bg-black px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">01</span>
                  </div>
                </div>
              </div>

              {/* 驚異的なカーボンクレジット */}
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex-grow flex flex-col h-full">
                <div className="flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-green-400 mb-4">{t({ JP: '驚異的なカーボンクレジット', EN: 'Amazing Carbon Credits' })}</h4>
                  <p className="text-gray-300 leading-[1.9] whitespace-pre-line mb-6">
                    {t({
                      JP: `MOTHER VEGETABLEのCO₂吸収効率は天然芝と比較するとおよそ700倍となるため、
世界中に建設できれば地球温暖化問題を急速に解決できる可能性を秘めています。`,
                      EN: `The CO₂ absorption efficiency of MOTHER VEGETABLE
is approximately 700 times that of natural grass,
which holds the potential to rapidly solve global warming issues if deployed worldwide.`
                    })}
                  </p>
                  <div className="flex flex-col md:flex-row justify-center gap-4">
                    <div className="w-full md:max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/mv-factory-whole.jpg"
                        alt="MOTHER VEGETABLE培養システム"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="w-full md:max-w-xs h-48 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src="/mv-factory-greenhouse.jpg"
                        alt="MOTHER VEGETABLEファクトリー建物"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-6">
                  <p className="text-gray-300 leading-[1.9] whitespace-pre-line">
                    {t({
                      JP: `本プロジェクトは実証フェーズを完了し、
マレーシアにて秘密裏にパイロットプラントが24時間365日稼働中です。

マザーベジタブル培養技術による均一化生産システムを確立し、
CO₂の安定的吸収を実証済み。

さらにASEAN諸国の政府機関や大学・研究機関との
戦略的パートナーシップにより、国際的な協力体制を構築。

「既に稼働している実証施設」と「国際的な官学連携」が
本プロジェクトの強力な競争優位性となっています。`,
                      EN: `This project has completed the verification phase,
with a pilot plant secretly operating 24/7 in Malaysia.

We have established a standardized production system
using Mother Vegetable cultivation technology
and demonstrated stable CO₂ absorption.

Furthermore, through strategic partnerships
with government agencies and universities/research institutions
in ASEAN countries, we have built an international cooperation framework.

Our "already operational demonstration facility"
and "international government-academic collaboration"
constitute the strong competitive advantage of this project.`
                    })}
                  </p>
                </div>
              </div>

             
            </div>

            {/* Right Section - 02 */}
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 opacity-50"></div>
                  <div className="relative px-6 py-3">
                    <span className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">02</span>
                  </div>
                </div>
              </div>

              {/* 地球最初の生命体とは */}
              <div className="p-6 bg-green-500/10 border border-green-500/30 rounded-lg flex-grow flex flex-col h-full">
                <div className="flex-grow flex flex-col">
                  <h4 className="text-lg font-bold text-green-400 mb-4">{t({ JP: '地球最初の生命体とは', EN: "Earth's First Life Form" })}</h4>
                  <p className="text-gray-300 leading-[1.9] whitespace-pre-line">
                    {t({
                      JP: `35億年前に地球で最初の生物を創った「マザーベジタブル」の
構造を分析して現在に再現した生命体を示します。`,
                      EN: `A life form recreated in the present by analyzing
the structure of "Mother Vegetable" that created
the first organisms on Earth 3.5 billion years ago.`
                    })}
                  </p>
                  <div className="flex justify-center mt-6 mb-10">
                    <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-lg">
                      <img
                        src="/mazavege.png"
                        alt="マザーベジタブル"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {/* 地球最初の生命体ができること */}
                <div className="mt-auto">
                  <h4 className="text-lg font-bold text-green-400 mb-4">{t({ JP: '地球最初の生命体ができること', EN: "What Earth's First Life Form Can Do" })}</h4>
                  <p className="text-gray-300 leading-[1.9] whitespace-pre-line">
                    {t({
                      JP: `最初の生命体が人類まで至っている進化の中で
様々なものを創ることができます。

例えば、たった1つの生命体から人類に必要な栄養素を
30種類以上含んだスーパーフードを提供することができたり、
地球上にすでに存在するものの成分が同じ代替品を創ることもできます。

様々なものが作れるようになった中で
我々は8つの産業に分類して
それぞれに対してマザーベジタブルを核に展開しています。`,
                      EN: `Through the evolution from the first life form to humanity,
we can create various things.

For example, from just one life form,
we can provide superfoods containing over 30 types
of nutrients essential for humans,
or create alternatives with the same components
as things that already exist on Earth.

Among the various things we can now create,
we have classified them into 8 industries
and are developing each with Mother Vegetable at the core.`
                    })}
                  </p>
                </div>
              </div>             
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}