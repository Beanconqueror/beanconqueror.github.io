---
title: "Running Costs"
# meta title
meta_title: ""
# meta description
description: "This is meta description"
# save as draft
draft: false
type: running-costs
---

### 100% transparency - Made in Germany

The bigger a project gets, the more tools will be needed to keep everything running smoothly and consistent. As started in the [vision](/#vision), we want to be transparent which also means showing you tools we use and the associated costs.

{{< chart 90 600 >}}
{
    type: 'line',
    data: {
        labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'iOS-Lizenz (€)',
            data: [99, 198, 297, 396, 495, 594, 693, 792, 891],
            borderColor: '#1d4ed8',
            backgroundColor: '#3B82F633',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'Microsoft 365 (€)',
            data: [null, null, null, null, 80, 160, 240, 320, 400],
            borderColor: '#6d28d9', // Farbe ändern, um Unterschied zu sehen
            backgroundColor: '#8b5cf633',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'DNS-Domains (€)',
            data: [null, null, null, null, 14, 28, 42, 56, 70],
            borderColor: '#16a34a', // Farbe ändern, um Unterschied zu sehen
            backgroundColor: '#22c55e33',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'Matomo / Hetzner Hosting (€)',
            data: [null, null, null, null, 21, 42, 63, 84, 105],
            borderColor: '#eab308', // Farbe ändern, um Unterschied zu sehen
            backgroundColor: '#fde04733',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'Microsoft Azure (€)',
            data: [null, null, null, null, 156, 312, 468, 624, 780],
            borderColor: '#d97706', // Farbe ändern, um Unterschied zu sehen
            backgroundColor: '#f59e0b33',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'Docker (€)',
            data: [null, null, null, null, 108, 216, 324, 432, 540],
            borderColor: '#0891b2', // Farbe ändern, um Unterschied zu sehen
            backgroundColor: '#22d3ee33',
            fill: 'start',
            tension: 0.4
        },
        {
            label: 'Costs in total (€)',
            data: [99, 198, 297, 396, 874, 1352, 1830, 2308, 2786],
            borderColor: '#b91c1c',
            backgroundColor: '#ef444433',
            fill: 'start',
            tension: 0.4
        }
        ]
    },
    options: {
        maintainAspectRatio: false,
        animation: {
            duration: 2000,
            easing: 'linear'
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Years'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Accumulated costs (€)'
                }
            }
        },
        plugins: {
            legend: {
                display: true
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `Accumulated costs: ${context.parsed.y} €`;
                    }
                }
            }
        }
    }
}
{{< /chart >}}



#### Active costs

| Name                     | Categorie      |  Cost per year  | activ since |
| ------------------------ | -------------- | :-------------: | :---------: |
| iOS-Lizenz               | Infrastructure |       99 €      |   01/2017   |
| Microsoft 365            | Infrastructure |       80 €      |   03/2021   |
| DNS-Domains              | Infrastructure |       14 €      |   02/2021   |
| Matomo / Hetzner Hosting | Tracking       |       21 €      |   04/2021   |
| Microsoft Azure          | Infrastructure |       156 €     |   01/2021   |
| Database                 | Infrastructure |       free      |   01/2021   |
| Docker                   | Infrastructure |       108 €     |   01/2021   |

#### Inactive costs

| Name                         | Categorie      |   Cost per year   | activ since |
| ---------------------------- | -------------- | :---------------: | :---------: |
| IntelliJ                     | Infrastructure |  Free currently   |   08/2018   |
| Android-Lizenz               | Infrastructure |  25 € - one time  |   01/2017   |
| Github                       | Infrastructure |  Free currently   |   01/2017   |
| Atlassian (Jira, Confluence) | Tracking       |  Free currently   |   01/2021   |
| Mailchimp                    | Infrastructure |  Free currently   |   01/2021   |
| Hetzner Setup                | Infrastructure | 9,90 € - one time |   04/2021   |
| Slack                        | Infrastructure |  Free currently   |   02/2025   |
| Cloudflare                   | Infrastructure |  Free currently   |   01/2017   |