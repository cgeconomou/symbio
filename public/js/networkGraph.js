// public/js/networkGraph.js

(async function() {
  // Read config injected on the container
  const container = document.getElementById('my_dataviz');
  const cfg = JSON.parse(container.getAttribute('data-config'));

  // Fetch your JSON data
  const data = await fetch('/data/data_network.json').then(r => r.json());

  // Map nodes for vis
  const nodes = data.nodes.map(d => ({
    id: d.id,
    label: `${d.name}\nIn Prison: ${d.inPrison ? 'Yes' : 'No'}\n${d.gender}`,
    shape: (cfg.inPrison && d.inPrison) ? 'box' : 'circle',
    color: cfg.showGender
      ? (d.gender === 'female' ? '#f77' : '#77f')
      : cfg.nodeColor,
    size: cfg.nodeSize
  }));

  // Map edges for vis
  const edges = data.links.map((l, i) => ({
    id: i,
    from: l.source,
    to:   l.target,
    label: String(l.interactionCount),
    color: {
      color: (l.birthplace && cfg.showBirthplace) ? 'green' : cfg.edgeColor
    },
    width: (l.related && cfg.showRelation)
      ? cfg.edgeWidth * 10
      : cfg.edgeWidth
  }));

  // Initialize the network
  const network = new vis.Network(container,
    {
      nodes: new vis.DataSet(nodes),
      edges: new vis.DataSet(edges)
    },
    {
      physics: {
        enabled: true,              
      stabilization: { enabled: true, iterations: 300 }
      },
      nodes: {
        font: { multi: true }
      },
      edges: {
        font: { align: 'middle' }
      }
    }
  );

      network.once("stabilizationIterationsDone", () => {
      network.setOptions({ physics: { enabled: false }});
    });
  // Expose updateGraph for dynamic styling later
  window.updateGraph = function(newCfg) {
    newCfg = newCfg || cfg;

    // Update node shapes/colors
    network.body.data.nodes.update(
      data.nodes.map(d => ({
        id: d.id,
        shape: (newCfg.inPrison && d.inPrison) ? 'box' : 'circle',
        color: newCfg.showGender
          ? (d.gender === 'female' ? '#f77' : '#77f')
          : newCfg.nodeColor,
        size: newCfg.nodeSize
      }))
    );

    // Update edge colors/widths
    network.body.data.edges.update(
      data.links.map((l, i) => ({
        id: i,
        color: { color: (l.birthplace && newCfg.showBirthplace) ? 'green' : newCfg.edgeColor },
        width: (l.related && newCfg.showRelation)
          ? newCfg.edgeWidth * 10
          : newCfg.edgeWidth
      }))
    );
  };
})();
