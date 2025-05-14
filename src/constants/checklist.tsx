export type Stage = {
    name: string;
    items: string[];
}

/**
 * TODO:
 *  - quais maltes vão só no final
 */

export const checklist: Stage[] = [{
    name: 'Dia anterior',
    items: [
        // 'Fazer starter da levedura', // baixa contagem de levedura
        'Gelo para resfriamento',
        'AA dos lúpulos ajustado',
        'Peso dos insumos verificado',
        'Levedura em estoque?',
        'Eficiência da panela ajustada?',
        'Double-check da duração da fervura',
        'Limitador de potencia testado',
    ],
}, {
    name: 'Setup',
    items: [
        'Filtro bazooca adicionado na panela',
        'Jaqueta de neoprene instalada',
        'pHmetro calibrado',
        'Densímetro calibrado',
        'iSpindel carregando',
        'Levedura líquida em fora da geladeira' // levedura líquida
    ]
}, {
    name: 'Pré mash',
    items: [
        'Sais de correção adicionados na água',
        'Ácido ascórbico adicionado na água',
        'Volume de água correto',
        'Temperatura de mash correta verificada com receita',
        'Temperatura de mash correta verificada com termômetro',
    ]
}, {
    name: 'Mash',
    items: [
        'Medição de pH em 10min'
    ]
}, {
    name: 'Fervura',
    items: [
        'Medição de pH pré fervura',
        'Medição de SG pré fervura',
        'Estimativa de volume pré fervura',
        'Chiller imersão adicionado com 15min do fim da fervura',
        'Pá de whirlpool adicionada com 15min do fim da fervura',
        'Floculante adicionado com 10min do fim da fervura',
        'Medição de pH pós fervura',
        'Medição de SG pós fervura'
    ]
}, {
    name: 'Hopstand',
    items: []
}, {
    name: 'Resfriamento',
    items: [
        'Mangueira de saída quente perto do ralo',
        'Fermentador sanitizado',
        'Triclamps apertadas',
        'Mangueira de saída de mosto sanitizada',
        'Amostra 200ml para medições finais'
    ]
}, {
    name: 'Knock-out',
    items: [
        'Medição de volume para fermentação'
    ],
}, {
    name: 'Inoculação',
    items: [
        'Airlock instalado',
        'Sensor de temperatura dentro do poço',
        'Borboleta aberta',
        'Triclamp apertado',
        'Grade da geladeira bem encaixada',
        'iSpindel ligado',
    ]
}, {
    name: 'Envase',
    items: [
        'Purga de levedura',
        'Clarificante adicionado após última purga de levedura',
        'Mangueira do filtro purgada',
        'Coletor do filtro com clarificante'
    ],
}]