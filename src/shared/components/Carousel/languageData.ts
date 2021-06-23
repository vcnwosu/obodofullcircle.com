import India from '../../../assets/images/India.svg';
import Germany from '../../../assets/images/Germany.svg';
import Italy from '../../../assets/images/Italy.svg';
import Nigeria from '../../../assets/images/Nigeria.png';
import Spain from '../../../assets/images/Spain.svg';
import UnitedKingdom from '../../../assets/images/UnitedKingdom.svg';

interface Language {
    srcFirst: string;
    languageFirst: string;
    srcSecond: string;
    languageSecond: string;
    srcThird: string;
    languageThird: string;
    srcFourth: string;
    languageFourth: string;
    srcFifth: string;
    languageFifth: string;
    srcSixth: string;
    languageSixth: string;
}
export const languageData: Language[] = [
    {
        srcFirst: India,
        languageFirst: 'Hindi',
        srcSecond: UnitedKingdom,
        languageSecond: 'English',
        srcThird: Nigeria,
        languageThird: 'IGBO',
        srcFourth: Spain,
        languageFourth: 'Spanish',
        srcFifth: Germany,
        languageFifth: 'German',
        srcSixth: Italy,
        languageSixth: 'Italian'
    }
]