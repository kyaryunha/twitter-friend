export const BackgroundFilter = ({color}: {color:string}) => {
    return <defs>
        <filter id="background-filter" x="0" y="0" width="1" height="1" >
            <feFlood floodColor={color} />
            <feComposite in="SourceGraphic" operator="xor"/>
        </filter>
    </defs>
}

export const OkFilter = () => {
    return <defs>
        <filter id="ok-filter" x="0" y="0" width="1" height="1" >
            <feFlood floodColor={"red"} />
            <feComposite in="SourceGraphic" operator="xor"/>
        </filter>
    </defs>
}

export const MasterFilter = () => {
    return <defs>
        <linearGradient id="master-filter" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" style={{stopColor:"rgb(124, 249, 255)", stopOpacity:1}} />
            <stop offset="50%" style={{stopColor:"rgb(180, 145, 255)", stopOpacity:1}} />
            <stop offset="100%" style={{stopColor:"rgb(255, 124, 168)",stopOpacity:1}} />
        </linearGradient>
    </defs>
}
