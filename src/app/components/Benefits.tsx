import {
  ArrowPathIcon,
  Bars3Icon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const benefits = [
  {
    name: 'Análise de Dados e Recorrência',
    description: "Insights valiosos ao seu alcance. Entenda o comportamento do cliente, descubra quais pratos são os favoritos e otimize seu cardápio com base em dados reais.",
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Customização de Destaques',
    description: "Escolha quais pratos destacar! Seja para maximizar lucros ou promover novidades, o Menuk permite que você direcione o olhar do cliente exatamente para onde desejar.",
    icon: LockClosedIcon,
  },
  {
    name: 'Flexibilidade na Integração',
    description: "O Menuk se adapta à sua necessidade. Se você já possui um cardápio em PDF, integramos vídeos diretamente. Se não, fornecemos um cardápio padrão com vídeos para você começar!",
    icon: ArrowPathIcon,
  },
  {
    name: 'Não precisa instalar aplicativo (tanto o cliente quanto o dono do restaurante)',
    description: "Não são necessários equipamentos ou programas sofisticados. Com apenas um celular, seu cliente tem acesso à inovação que o Menuk proporciona, sem precisar instalar app",
    icon: FingerPrintIcon,
  },
  {
    name: 'Atualização Descomplicada',
    description: "A manutenção do seu cardápio nunca foi tão simples. Adicione ou remova vídeos com facilidade, mantendo seu cardápio sempre atualizado e atraente.",
    icon: FingerPrintIcon,
  },
  {
    name: 'Suporte Total ao Cliente',
    description: "Nossa equipe está aqui para ajudar. Com um gerente de contas dedicado, garantimos suporte e treinamento contínuos, garantindo que você aproveite ao máximo o Menuk.",
    icon: FingerPrintIcon,
  },
]

export default function Benefits() {
  return (
    <div className="bg-white" id='functionalities'>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Benefícios para o restaurante
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Integração Simples e Suporte Completo
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--primary-color)]">
                    <benefit.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{benefit.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
} 