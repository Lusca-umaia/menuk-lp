import { Disclosure } from '@headlessui/react'

import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "O Menuk é um aplicativo que meus clientes precisam baixar?",
    answer: "Não, o Menuk é acessado através de um QR Code no restaurante. Os clientes simplesmente escaneiam e têm acesso direto ao cardápio interativo"
  },
  {
    question: "Como faço para integrar vídeos ao meu cardápio existente?",
    answer: "Se você já possui um cardápio em PDF, nós adicionamos os vídeos diretamente. Se não, fornecemos um cardápio padrão com vídeos inclusos."
  },
  {
    question: "Preciso de algum equipamento especial para usar o Menuk?",
    answer: "Não, seus clientes só precisam de um celular para acessar e desfrutar do Menuk."
  },
  {
    question: "Qual é a vantagem de usar vídeos em vez de fotos tradicionais no cardápio?",
    answer: "Os vídeos capturam a atenção e geram um desejo inconsciente nos clientes, oferecendo uma experiência imersiva. Isso não só destaca os pratos, mas também tem o potencial de aumentar significativamente o ticket médio, como vimos com produtos que tiveram um aumento de até 129% nas vendas."
  },
  {
    question: "O Menuk oferece suporte técnico ou treinamento?",
    answer: "Sim, oferecemos suporte completo. Além disso, você terá um gerente de contas dedicado para auxiliar em todas as suas necessidades."
  },
  {
    question: "Como o Menuk pode aumentar minhas vendas?",
    answer: "O Menuk utiliza vídeos que despertam o desejo inconsciente dos clientes, incentivando-os a experimentar mais pratos e, consequentemente, aumentando o ticket médio."
  },
  {
    question: "Como eu sei se o menuk está me ajudando a vender mais?",
    answer: "Sim! O Menuk permite que você analise quais vídeos são mais visualizados, retenção de clientes e outras métricas valiosas. Esses insights ajudam a otimizar ainda mais a experiência do cliente e a estratégia do restaurante."
  },
  {
    question: "Existe algum recurso de análise para entender o comportamento dos clientes?",
    answer: "Sim, o Menuk oferece insights valiosos sobre o comportamento dos clientes, permitindo otimizar seu cardápio com base em dados reais e preferências dos clientes."
  },
]

export default function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10" id='faq'>
          <article>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Dúvidas Frequentes</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tem outras dúvidas? Entre em contato em <a href='#' className='font-semibold underline'>ajuda@menuk.com.br</a>
            </p>
          </article>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="max-sm:text-base text-lg font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="max-sm:text-sm text-base leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 