
export const goDownAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.9 },
    }),
}

export const goUpAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: { delay: custom * 0.9 },
    }),
}

export const goLeftAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: (custom: number) => ({
        x: 0,
        opacity: 1,
        transition: { delay: custom * 0.9 },
    }),
}
