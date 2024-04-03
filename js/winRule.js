export default function winRule(n, cellsId) {
    const rules = scaleRule(n, cellsId, scale)
    return (
        rules.some(function (value) {
           return value === true;
        })
    );
}

function idHasClass(id, className) {
    return $(`#${id}`).hasClass(className);
}

function scaleRule(n, cellsId) {
    const allChecks = []
    for (let i = 0; i < cellsId.length; i++) {
        allChecks.push(idHasClass(cellsId[i], n))
    }

    return scale(allChecks);

}

function scale(allChecks) {

        const scale = Math.sqrt(allChecks.length);

        if (scale === 3) {
            const [check1, check2, check3, check4, check5, check6, check7, check8, check9] = allChecks;

            const rule1 = (check1 && check2 && check3);
            const rule2 = (check4 && check5 && check6);
            const rule3 = (check7 && check8 && check9);
            const rule4 = (check1 && check4 && check7);
            const rule5 = (check2 && check5 && check8);
            const rule6 = (check3 && check6 && check9);
            const rule7 = (check1 && check5 && check9);
            const rule8 = (check3 && check5 && check7);

            return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8];
        }

        if (scale === 4) {
            const [check1, check2, check3, check4, check5, check6, check7, check8, check9, check10, check11, check12, check13, check14, check15, check16] = allChecks;

            const rule1 = (check1 && check2 && check3 && check4);
            const rule2 = (check5 && check6 && check7 && check8);
            const rule3 = (check9 && check10 && check11 && check12);
            const rule4 = (check13 && check14 && check15 && check16);
            const rule5 = (check1 && check5 && check9 && check13);
            const rule6 = (check2 && check6 && check10 && check14);
            const rule7 = (check3 && check7 && check11 && check15);
            const rule8 = (check4 && check8 && check12 && check16);
            const rule9 = (check1 && check6 && check11 && check16);
            const rule10 = (check4 && check7 && check10 && check13);

            return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10];
        }

        if (scale === 5) {
            const [check1, check2, check3, check4, check5,
                    check6, check7, check8, check9, check10,
                    check11, check12, check13, check14, check15,
                    check16, check17, check18, check19, check20,
                    check21, check22, check23, check24, check25] = allChecks;

            const rule1 = (check1 && check2 && check3 && check4 && check5);
            const rule2 = (check6 && check7 && check8 && check9 && check10);
            const rule3 = (check11 && check12 && check13 && check14 && check15);
            const rule4 = (check16 && check17 && check18 && check19 && check20);
            const rule5 = (check21 && check22 && check23 && check24 && check25);
            const rule6 = (check1 && check6 && check11 && check16 && check21);
            const rule7 = (check2 && check7 && check12 && check17 && check22);
            const rule8 = (check3 && check8 && check13 && check18 && check23);
            const rule9 = (check4 && check9 && check14 && check19 && check24);
            const rule10 = (check5 && check10 && check15 && check20 && check25);
            const rule11 = (check1 && check7 && check13 && check19 && check25);
            const rule12 = (check5 && check9 && check13 && check17 && check21);

            return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12];
        }

    if (scale === 6) {
        const [check1, check2, check3, check4, check5,
            check6, check7, check8, check9, check10,
            check11, check12, check13, check14, check15,
            check16, check17, check18, check19, check20,
            check21, check22, check23, check24, check25,
            check26,check27,check28,check29,check30,
            check31,check32,check33,check34,check35,check36] = allChecks;

        const rule1 = (check1 && check2 && check3 && check4 && check5 && check6);
        const rule2 = (check7 && check8 && check9 && check10 && check11 && check12);
        const rule3 = (check13 && check14 && check15 && check16 && check17 && check18);
        const rule4 = (check19 && check20 && check21 && check22 && check23 && check24);
        const rule5 = (check25 && check26 && check27 && check28 && check29 && check30);
        const rule6 = (check31 && check32 && check33 && check34 && check35 && check36);
        const rule7 = (check1 && check7 && check13 && check19 && check25 && check31);
        const rule8 = (check2 && check8 && check14 && check20 && check26 && check32);
        const rule9 = (check3 && check9 && check15 && check21 && check27 && check33);
        const rule10 = (check4 && check10 && check16 && check22 && check28 && check34);
        const rule11 = (check5 && check11 && check17 && check23 && check29 && check35);
        const rule12 = (check6 && check12 && check18 && check24 && check30 && check36);
        const rule13 = (check1 && check8 && check15 && check22 && check29 && check36);
        const rule14 = (check6 && check11 && check16 && check21 && check26 && check31);

        return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14];
    }

    if (scale === 7) {
        const [check1, check2, check3, check4, check5,
            check6, check7, check8, check9, check10,
            check11, check12, check13, check14, check15,
            check16, check17, check18, check19, check20,
            check21, check22, check23, check24, check25,
            check26,check27,check28,check29,check30,
            check31,check32,check33,check34,check35,
            check36, check37, check38, check39, check40,
            check41, check42, check43, check44, check45,
            check46, check47, check48, check49] = allChecks;

        const rule1 = (check1 && check2 && check3 && check4 && check5 && check6 && check7);
        const rule2 = (check8 && check9 && check10 && check11 && check12 && check13 && check14);
        const rule3 = (check15 && check16 && check17 && check18 && check19 && check20 && check21);
        const rule4 = (check22 && check23 && check24 && check25 && check26 && check27 && check28);
        const rule5 = (check29 && check30 && check31 && check32 && check33 && check34 && check35);
        const rule6 = (check36 && check37 && check38 && check39 && check40 && check41 && check42);
        const rule7 = (check43 && check44 && check45 && check46 && check47 && check48 && check49);
        const rule8 = (check1 && check8 && check15 && check22 && check29 && check36 && check43);
        const rule9 = (check2 && check9 && check16 && check23 && check30 && check37 && check44);
        const rule10 = (check3 && check10 && check17 && check24 && check31 && check38 && check45);
        const rule11 = (check4 && check11 && check18 && check25 && check32 && check39 && check46);
        const rule12 = (check5 && check12 && check19 && check26 && check33 && check40 && check47);
        const rule13 = (check6 && check13 && check20 && check27 && check34 && check41 && check48);
        const rule14 = (check7 && check14 && check21 && check28 && check35 && check42 && check49);
        const rule15 = (check1 && check9 && check17 && check25 && check33 && check41 && check49);
        const rule16 = (check7 && check13 && check19 && check25 && check31 && check37 && check43);

        return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15, rule16];
    }

    if (scale === 8) {
        const [check1, check2, check3, check4, check5,
            check6, check7, check8, check9, check10,
            check11, check12, check13, check14, check15,
            check16, check17, check18, check19, check20,
            check21, check22, check23, check24, check25,
            check26,check27,check28,check29,check30,
            check31,check32,check33,check34,check35,
            check36, check37, check38, check39, check40,
            check41, check42, check43, check44, check45,
            check46, check47, check48, check49, check50,
            check51, check52, check53, check54, check55,
            check56, check57, check58, check59, check60,
            check61, check62, check63, check64] = allChecks;

        const rule1 = (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8);
        const rule2 = (check9 && check10 && check11 && check12 && check13 && check14 && check15 && check16);
        const rule3 = (check17 && check18 && check19 && check20 && check21 && check22 && check23 && check24);
        const rule4 = (check25 && check26 && check27 && check28 && check29 && check30 && check31 && check32);
        const rule5 = (check33 && check34 && check35 && check36 && check37 && check38 && check39 && check40);
        const rule6 = (check41 && check42 && check43 && check44 && check45 && check46 && check47 && check48);
        const rule7 = (check49 && check50 && check51 && check52 && check53 && check54 && check55 && check56);
        const rule8 = (check57 && check58 && check59 && check60 && check61 && check62 && check63 && check64);
        const rule9 = (check1 && check9 && check17 && check25 && check33 && check41 && check49 && check57);
        const rule10 = (check2 && check10 && check18 && check26 && check34 && check42 && check50 && check58);
        const rule11 = (check3 && check11 && check19 && check27 && check35 && check43 && check51 && check59);
        const rule12 = (check4 && check12 && check20 && check28 && check36 && check44 && check52 && check60);
        const rule13 = (check5 && check13 && check21 && check29 && check37 && check45 && check53 && check61);
        const rule14 = (check6 && check14 && check22 && check30 && check38 && check46 && check54 && check62);
        const rule15 = (check7 && check15 && check23 && check31 && check39 && check47 && check55 && check63);
        const rule16 = (check8 && check16 && check24 && check32 && check40 && check48 && check56 && check64);
        const rule17 = (check1 && check10 && check19 && check28 && check37 && check46 && check55 && check64);
        const rule18 = (check8 && check15 && check22 && check29 && check36 && check43 && check50 && check57);

        return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18];
    }


    if (scale === 9) {
        const [check1, check2, check3, check4, check5,
            check6, check7, check8, check9, check10,
            check11, check12, check13, check14, check15,
            check16, check17, check18, check19, check20,
            check21, check22, check23, check24, check25,
            check26,check27,check28,check29,check30,
            check31,check32,check33,check34,check35,
            check36, check37, check38, check39, check40,
            check41, check42, check43, check44, check45,
            check46, check47, check48, check49, check50,
            check51, check52, check53, check54, check55,
            check56, check57, check58, check59, check60,
            check61, check62, check63, check64, check65,
            check66, check67, check68, check69, check70,
            check71, check72, check73, check74, check75,
            check76, check77, check78, check79, check80, check81] = allChecks;

        const rule1 = (check1 && check2 && check3 && check4 && check5 && check6 && check7 && check8 && check9);
        const rule2 = (check10 && check11 && check12 && check13 && check14 && check15 && check16 && check17 && check18);
        const rule3 = (check19 && check20 && check21 && check22 && check23 && check24 && check25 && check26 && check27);
        const rule4 = (check28 && check29 && check30 && check31 && check32 && check33 && check34 && check35 && check36);
        const rule5 = (check37 && check38 && check39 && check40 && check41 && check42 && check43 && check44 && check45);
        const rule6 = (check46 && check47 && check48 && check49 && check50 && check51 && check52 && check53 && check54);
        const rule7 = (check55 && check56 && check57 && check58 && check59 && check60 && check61 && check62 && check63);
        const rule8 = (check64 && check65 && check66 && check67 && check68 && check69 && check70 && check71 && check72);
        const rule9 = (check73 && check74 && check75 && check76 && check77 && check78 && check79 && check80 && check81);
        const rule10 = (check1 && check10 && check19 && check28 && check37 && check46 && check55 && check64 && check73);
        const rule11 = (check2 && check11 && check20 && check29 && check38 && check47 && check56 && check65 && check74);
        const rule12 = (check3 && check12 && check21 && check30 && check39 && check48 && check57 && check66 && check75);
        const rule13 = (check4 && check13 && check22 && check31 && check40 && check49 && check58 && check67 && check76);
        const rule14 = (check5 && check14 && check23 && check32 && check41 && check50 && check59 && check68 && check77);
        const rule15 = (check6 && check15 && check24 && check33 && check42 && check51 && check60 && check69 && check78);
        const rule16 = (check7 && check16 && check25 && check34 && check43 && check52 && check61 && check70 && check79);
        const rule17 = (check8 && check17 && check26 && check35 && check44 && check53 && check62 && check71 && check80);
        const rule18 = (check9 && check18 && check27 && check36 && check45 && check54 && check63 && check72 && check81);
        const rule19 = (check1 && check11 && check21 && check31 && check41 && check51 && check61 && check72 && check81);
        const rule20 = (check9 && check17 && check25 && check33 && check41 && check49 && check57 && check65 && check73);

        return [rule1, rule2, rule3, rule4, rule5, rule6, rule7, rule8, rule9, rule10, rule11, rule12, rule13, rule14, rule15, rule16, rule17, rule18, rule19, rule20];
    }
}
