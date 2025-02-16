export type Stage = {
    name: string;
    items: string[];
}
export const checklist: Stage[] = [{
    name: 'Dia anterior',
    items: [
        'Gelo para resfriamento',
        'AA dos lúpulos ajustado',
        'Adição do floculante'
    ],
}, {
    name: 'Setup',
    items: [
        'Filtro bazooca adicionado na panela',
        'Jaqueta de neoprene instalada'
    ]
}, {
    name: 'Pré mash',
    items: [
        'Sais de correção adicionados na água',
        'Ácido ascórbico adicionado na água',
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
    name: 'Inoculação',
    items: [
        'Airlock instalado',
        'Sensor de temperatura dentro do poço',
        'Borboleta aberta',
        'Triclamp apertado',
        'Grade da geladeira bem encaixada',
        'iSpindel ligado',
    ]
}]