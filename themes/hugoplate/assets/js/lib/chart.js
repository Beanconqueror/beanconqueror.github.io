export function initCharts() {
    document.querySelectorAll('[data-chart]').forEach(el => {
      new Chart(el.getContext('2d'), JSON.parse(el.dataset.chart))
    })
  }
  
  document.addEventListener('DOMContentLoaded', initCharts)
  