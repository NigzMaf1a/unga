type Ref = 'bgOne' | 'bgTwo' | 'bgThree' | 'bgFour' | 'bgFive';
type Dp = 'dp101' | 'dp102';
type Web = 'web101' | 'web102' | 'web103' | 'web105';

type Bg = Record<Ref, string>;
type DpImages = Record<Dp, string>;
type WebImages = Record<Web, string>;


export const backgroundImages: Bg = {
    bgOne: "/bgOne.jpg",
    bgTwo: "/bgTwo.jpg",
    bgThree: "/bgThree.jpg",
    bgFour: "/bgFour.jpg",
    bgFive: "/bgFive.jpg"
};

export const dpImages: DpImages = {
    dp101: "/dp101.JPG",
    dp102: "/dp102.JPG"
};

export const webImages: WebImages = {
    web101: "/web101.JPG",
    web102: "/web102.JPG",
    web103: "/web103.JPG",
    web105: "/web105.JPG"
};