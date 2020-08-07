

const titles = ['Nice flat', 'Gorgeous house', 'Beautiful flat', 'Pretty apartment', 'Cute little house', 'Stylish flat',
                 'Amazing living', 'Wonderful place'];
const dispositions = ['1', '2', '3', '1+1', '4', '5'];
const cities = ['New York', 'San Francisco', 'Los Angeles', 'Detroit', 'Washington', 'Atlanta'];
const smallUrls = ['/houses/1_small.jpg', '/houses/2_small.jpg', '/houses/3_small.jpg', 
                    '/houses/4_small.jpg', '/houses/5_small.jpg', '/houses/6_small.jpg'];

const descriptions = ['Pleased him another was settled for. Moreover end horrible endeavor entrance any families. Income appear extent on of thrown in admire. Stanhill on we if vicinity material in. Saw him smallest you provided ecstatic supplied. Garret wanted expect remain as mr. Covered parlors concern we express in visited to do. Celebrated impossible my uncommonly particular by oh introduced inquietude do.',
'Do in laughter securing smallest sensible no mr hastened. As perhaps proceed in in brandon of limited unknown greatly. Distrusts fulfilled happiness unwilling as explained of difficult. No landlord of peculiar ladyship attended if contempt ecstatic. Loud wish made on is am as hard. Court so avoid in plate hence. Of received mr breeding concerns peculiar securing landlord. Spot to many it four bred soon well to. Or am promotion in no departure abilities. Whatever landlord yourself at by pleasure of children be.',
'By impossible of in difficulty discovered celebrated ye. Justice joy manners boy met resolve produce. Bed head loud next plan rent had easy add him. As earnestly shameless elsewhere defective estimable fulfilled of. Esteem my advice it an excuse enable. Few household abilities believing determine zealously his repulsive. To open draw dear be by side like.',
'Whole every miles as tiled at seven or. Wished he entire esteem mr oh by. Possible bed you pleasure civility boy elegance ham. He prevent request by if in pleased. Picture too and concern has was comfort. Ten difficult resembled eagerness nor. Same park bore on be. Warmth his law design say are person. Pronounce suspected in belonging conveying ye repulsive.',
'Wrote water woman of heart it total other. By in entirely securing suitable graceful at families improved. Zealously few furniture repulsive was agreeable consisted difficult. Collected breakfast estimable questions in to favourite it. Known he place worth words it as to. Spoke now noise off smart her ready.',
'Paid was hill sir high. For him precaution any advantages dissimilar comparison few terminated projecting. Prevailed discovery immediate objection of ye at. Repair summer one winter living feebly pretty his. In so sense am known these since. Shortly respect ask cousins brought add tedious nay. Expect relied do we genius is. On as around spirit of hearts genius. Is raptures daughter branched laughter peculiar in settling.'
];


var foo: number[] = [];

for (var i = 1; i <= 100; i++) {
    foo.push(i);
}
export const generalData = foo.map((i) => {
    const house = {
        title: titles[Math.floor(Math.random() * titles.length)],
        price: Math.trunc(Math.random() * 1000000),
        disposition: dispositions[Math.floor(Math.random() * dispositions.length)],
        city: cities[Math.floor(Math.random() * cities.length)],
        id: i,
        smallUrl: smallUrls[Math.floor(Math.random() * smallUrls.length)],
    };
    return house;
}); 

export const specificData = generalData.map((el) => {
    const house = {
        title: el.title,
        price: el.price,
        disposition: el.disposition,
        city: el.city,
        id: el.id,
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        bigUrl: el.smallUrl.replace('_small','')
    }
    return house;
});
