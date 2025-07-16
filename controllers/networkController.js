// controllers/networkController.js

// 1) Default config
let currentConfig = {
  edgeColor:  "#aaa",
  edgeWidth:   1,
  nodeColor: "#69b3a2",
  nodeSize:   40,
  showGender: false,
  inPrison: false,
  showRelation: false,
  showBirthplace: false
};

// 2) Render the view, passing currentConfig into EJS
exports.showGraph = (req, res) => {
  res.render('network', {
    title:  'Network Graph',
    config: currentConfig
  });
};

// 3) Receive updates via POST /config
exports.postConfig = (req, res) => {
  const cfg = req.body.config;
  // Basic validation (you can expand this)
  if (cfg.edgeColor && cfg.nodeColor && +cfg.edgeWidth >= 0 && +cfg.nodeSize > 0) {
    currentConfig = {
      edgeColor: cfg.edgeColor,
      edgeWidth: +cfg.edgeWidth,
      nodeColor: cfg.nodeColor,
      nodeSize: +cfg.nodeSize,
      showGender: cfg.showGender,
      inPrison: cfg.inPrison,
      showRelation: cfg.showRelation,
      showBirthplace: cfg.showBirthplace
    };
    // res.redirect(303, '/');
    return res.json({ success: true, config: currentConfig });
  }
  res.status(400).json({ success: false, message: 'Invalid config.' });
};

exports.getConfig = (req, res) => {
  res.json(currentConfig);
};