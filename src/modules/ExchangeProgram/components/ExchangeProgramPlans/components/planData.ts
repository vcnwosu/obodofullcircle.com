interface detailText {
    text: string;
    showInfoIcon: boolean;
    tooltipType?: string;
    tooltipList?: string[];
    tooltipText?: string;
    textType?: string;
    listText?: string[];
}

export interface PlanType {
    heading: string;
    price: string;
    priceSingleMonth: string;
    priceSingleMonthQuaterly: string;
    priceTotal: string;
    detailsList: detailText[]
}

export const basicPlanData: PlanType = {
    heading: 'Basic',
    price: '$65',
    priceSingleMonth: '$55',
    priceSingleMonthQuaterly: '$50',
    priceTotal: '$98',
    detailsList: [
        {
            text: 'Live calls : Per week upto <b>1 hour</b>',
            showInfoIcon: false
        },
        {
            text: 'Live calls with : <b>Conversation partner</b>',
            showInfoIcon: true,
            tooltipType: 'Line',
            tooltipText: 'Conversation partner: a native speaker who has undergone detailed training to work with learners, provide optimal learning environment,  and explain basic grammatical details'
        },
        {
            text: 'Zoom audio and occasional whiteboard instruction',
            showInfoIcon: false
        },
        {
            text: 'Learning Style: <b>Case based</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Multimedia Learning Resources',
            showInfoIcon: true,
            tooltipType: 'list',
            tooltipList: [
                'Dialogues',
                'Video/Movie exercises',
                'Audio Exercises',
                'Music exercises',
                'Poems, Plays, Literature etc'
            ]
        },
        {
            text: 'Monthly Verbal Quizzes with detailed review',
            showInfoIcon: false
        },
        {
            text: 'Progress Tracking: Verbal Monthly Goals review',
            showInfoIcon: false
        },
        {
            text: 'Access : Voice note Exchanges and Library, Immersion weekly plans',
            showInfoIcon: false,
        },
        {
            text: '<b>3 free audio flashcard sets</b> for the duration of your subscription',
            showInfoIcon: false
        },
        {
            text: 'Abridged grammar lessons with conversation focus',
            showInfoIcon: false
        },
        {
            text: 'Worksheets not provided',
            showInfoIcon: false
        }
    ]
}

export const premiumPlanData: PlanType = {
    heading: 'Premium',
    price: '$115',
    priceSingleMonth: '$110',
    priceSingleMonthQuaterly: '$95',
    priceTotal: '$198',
    detailsList: [
        {
            text: 'Live calls : Per week <b>1 hr 30 mins</b>',
            showInfoIcon: false
        },
        {
            text: 'Live calls with : <b>Tutor</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Tutor: a native speaker with over 2 years of experience teaching the language at various capacities.  Also undergone training to work with learners to provide an ideal learning environment. More experienced with teaching basic and advanced grammatical concepts.'
        },
        {
            text: 'Zoom audio and whiteboard instruction each session',
            showInfoIcon: false
        },
        {
            text: 'Learning Style: <b>Integrated Classroom and Case Based</b>',
            tooltipType: 'Line',
            showInfoIcon: true,
            tooltipText: 'Case based learning - teaching facilitated through practical examples, scenarios, and role play application and having that lead discussion of grammar and other language topics.'
        },
        {
            text: 'Multimedia Learning Resources',
            showInfoIcon: true,
            tooltipType: 'list',
            tooltipList: [
                'Dialogues',
                'Video/Movie exercises',
                'Audio Exercises',
                'Music exercises',
                'Poems, Plays, Literature etc'
            ]
        },
        {
            text: 'Monthly Written and Verbal Quizzes with detailed review',
            showInfoIcon: false
        },
        {
            text: 'Progress Tracking: Monthly Language learning goals sheet and verbal goals review',
            showInfoIcon: false
        },
        {
            text: 'Access : Voice note Exchanges and Library, Immersion weekly plan',
            showInfoIcon: false,
        },
        {
            text: '<b>UNLIMITED audio flashcard sets</b> for the duration of your subscription',
            showInfoIcon: false
        },
        {
            text: 'Detailed grammar lessons with conversation focus',
            showInfoIcon: false
        },
        {
            text: 'Worksheets provided for additional practice',
            showInfoIcon: false
        }
    ]
}