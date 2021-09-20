import React from 'react'
export const MenuItems = [
    {
        title: 'Expert View',
        routeTo: '/landing/info',
        icon: '/searchList.png'
    },
    {
        title: 'Chiller Overview',
        routeTo: '/dashboard',
        icon: ()=><i style={{fontSize:25}} class="fas fa-chart-line"></i>,
        siteIds:[5,6,7,8,9,10,11,12,13,14,17,19,20]
    },
    {
        title: 'Vibration Info',
        routeTo: '/vb/vibration-info',
        icon: ()=><i style={{fontSize:25}}  class="fas fa-info-circle"></i>,
        siteIds:[19,20]
    },
    {
        title: 'Water Quality',
        routeTo: '/wq/water-quality-overview',
        icon: ()=><i style={{fontSize:25}}  class="fas fa-tint"></i>,
        siteIds:[15,16,18]
    },
    {
        title: 'ML Platform',
        subTitle: '523 Alerts',
        routeTo: '/ml/solutions',
        icon: ()=><i style={{fontSize:25}}  class="fas fa-laptop-code"></i>,
        siteIds:[7,8,9,10,11,12,13],
        child: [
            {
                title: 'Anomaly Detections',
                routeTo: '/ml/anomaly-detections',
                icon: '/detection1-111.png'
            },
            {
                title: 'Chiller Operations Optimizer',
                routeTo: '/ml/fault-detection-diagnosis',
                icon: '/Fault333.png'
            },
            {
                title: 'CALM',
                routeTo: '/ml/calm',
                icon: '/Fault333.png'
            }
        ]
    }
]