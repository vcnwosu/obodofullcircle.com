export interface PlanType {
    heading: string;
    code: string;
    price: string;
    cycle: string;
    detailsList: string[];
    priceKey: string;
}

export const freePlanData: PlanType = {
    heading: 'Freemium',
    code: 'FREE',
    price: 'Free',
    cycle: '7 DAYS',
    detailsList: [
        '<b>Lesson:</b> <b class="special">Free Trial</b> with expert instructor and midweek audio practice',
        '<b>Flashcards:</b> Access to <b class="special">3 sets</b>',
        '<b>Media Hub:</b> <b class="special">Unlimited</b> access to curated podcasts, youtube videos, and more',
        '<b>Gamified Learning Paths:</b> Limited Access to <b class="special">5 minutes</b> a day to locked journeys'
    ],
    priceKey: 'price_1RW4NaGyxj2QcWPdWXoYFjIb'
}

export const starterPlanData: PlanType = {
    heading: 'Starter pack',
    code: 'STARTER',
    price: '$9.99',
    cycle: 'MONTH',
    detailsList: [
        '<b>Lesson:</b> <b class="special">Free Trial</b> with expert instructor and midweek audio practice',
        '<b>Flashcards:</b> Access to <b class="special">5 sets</b>',
        '<b>Media Hub:</b> <b class="special">Unlimited</b> access to curated podcasts, youtube videos, and more',
        '<b>Gamified Learning Paths:</b> Limited Access to <b class="special">8 minutes</b> a day to locked journeys'
    ],
    priceKey: 'price_1RW4NaGyxj2QcWPdb1Qyc7lm'
}

export const basicPlanData: PlanType = {
    heading: 'Basic program',
    code: 'BASIC',
    price: '$59.99',
    cycle: 'MONTH',
    detailsList: [
        '<b>Lesson:</b> <b class="special">Up to 1-hour weekly</b> Lesson with Additional Speaking Practice (Tues & Thurs)',
        '<b>Instruction Style:</b> Audio/conversation-Driven approach with Strategic Use of Visual presentations',
        '<b>Flashcards:</b> Access to <b class="special">15 sets</b> in standard Igbo and Dialects',
        '<b>Media Hub:</b> <b class="special">Unlimited</b> access to curated podcasts, youtube videos, and more',
        '<b>Gamified Learning Paths:</b> Limited Access to <b class="special">15 mins</b> ALL journeys unlocked',
        '<b>Dialects:</b> Option of <b class="special">Standard Igbo</b> and <b class="special">Anambra</b> general only'
    ],
    priceKey: 'price_1RW4NaGyxj2QcWPdnFH5lFvr'
}

export const premiumPlanData: PlanType = {
    heading: 'Premium program',
    code: 'PREMIUM',
    price: '$109.99',
    cycle: 'MONTH',
    detailsList: [
        '<b>Lesson:</b> <b class="special">1h30m weekly</b> Lesson OR <b class="special">2, 45min weekly</b> sessions with Additional Speaking Practice (Tues & Thurs)',
        '<b>Instruction Style:</b> Blended Conversation and Visual Presentation model',
        '<b>Flashcards:</b> <b class="special">Unlimited Access</b>',
        '<b>Media Hub:</b> <b class="special">Unlimited Access</b> to curated podcasts, youtube videos and more',
        '<b>Gamified Learning Paths:</b> <b class="special">Unlimited Access</b>',
        '<b>Dialects:</b> <b class="special">Unlimited Option</b>, Select from Standard Igbo and/or All other dialect options such as Anambra, Ngwa, Enuani, Owerri, Abiriba'
   ],
   priceKey: 'price_1RW4NaGyxj2QcWPdcvT4HPBd'
}