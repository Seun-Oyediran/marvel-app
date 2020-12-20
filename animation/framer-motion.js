export const homeBox = {
    initial: {
        y: '100vh',
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        y: '100vh',
        opacity: 0,
        transition: { duration: 0.5 }
    }
}

export const hover = {
    boxShadow: '0px 0px 5px black',
    scale: 1.1,
    originX: 0,
    transition: { type: 'stagger', stiffness: 300 },
}

export const hoverLinks = {
    scale: 1.1,
    originX: 0,
    transition: { type: 'stagger', stiffness: 300 },
}

export const cardHover = {
    opacity: 1,
    scale: 1.05
}


export const paging = {
    initial: {
        x: '1000px',
        opacity: 0.4,
        // scale: 0.5,
    },
    animate: {
        x: 0,
        opacity: 0.85,
        // scale: 1,
        transition: { delay: 0.2, duration: 0.7 }
    },
    exit: {
        x: '1000px',
        opacity: 0.4,
        // scale: 0.5,
        transition: { delay: 0.2, duration: 0.7 }
    }
}

export const pager = {
    initial: {
        x: '-100vw',
        opacity: 0.4,
        // scale: 0.5,
    },
    animate: {
        x: '50%',
        opacity: 1,
        // scale: 1,
        transition: { duration: 0.5 }
    },
    exit: {
        x: '100vw',
        opacity: 0.4,
        // scale: 0.5,
        transition: { duration: 0.5 }
    }
}

export const closer = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: { duration: 0.2, delay: 0.2 }
    },
    exit: {
        opacity: 0,
        transition: { duration: 0.2 }
    }
}