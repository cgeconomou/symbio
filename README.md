# 🔗 Symbiotik Network Graph Prototype

This application visualizes a network graph using [vis.js](https://visjs.org/), displaying nodes and edges with dynamic styling based on configurable properties.

---

## ✨ Features

- 🏛️ **MVC pattern** with a single view (`network.ejs`)  
- 🗂️ **Data‑driven**: nodes and links from `public/data/data_network.json`  
- 🎨 **Dynamic styling**: color, shape, size controlled by config  
- 🔄 **Toggle options**: gender, relation, birthplace, prison status  
- 🤝 **Interactive**: drag‑and‑drop nodes, zoom/pan  
- 📐 **Physics layout**: stabilization iterations for a neat graph  

---

## ⚙️ Prerequisites

- 🖥️ **Node.js** v14+ (includes npm)  
- 🌐 **Git** (or simply download the repo)

---

## 🛠️ Installation & Setup

1. **Clone** this repository  
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo

2. **Install dependencies** 
   ```bash
   npm install

3. Verify data is present at `public/data/data_network.json` in this format:

   ```json
   {
     "nodes": [
       { "id": 1, "name": "Alice", "gender": "female", "inPrison": false }
       // … more nodes …
     ],
     "links": [
       { "source": 1, "target": 2, "interactionCount": 5, "related": true, "birthplace": false }
       // … more links …
     ]
   }

4. **🚀 Running the App** 
   ```bash
   npm start

5. **🔗 API Endpoints**  
   - `GET /`  
     📄 Renders the network view.  
   - `GET /config`  
     🔧 Retrieves the current graph configuration:  
     ```json
     {
       "edgeColor": "#aaa",
       "edgeWidth": 1,
       "nodeSize": 20,
       "nodeColor": "#69b3a2",
       "inPrison": false,
       "showRelation": true,
       "showBirthplace": false,
       "showGender": true
     }
     ```
   - `POST /config`  
     ✏️ Updates the configuration. Send JSON configuration in request body:  
     ```json
     {
       "config": {
         "edgeColor": "#f00",
         "edgeWidth": 3,
         "nodeSize": 25,
         "nodeColor": "#0f0",
         "inPrison": true,
         "showRelation": false,
         "showBirthplace": true,
         "showGender": false
       }
     }
     ```
     **Responses:**  
     - Success (200 OK):  
       ```json
       {"success": true, "config": { /* updated config */ }}
       ```  
     - Error (400 Bad Request):  
       ```json
       {"success": false, "message": "Invalid config."}
       ```
    6. ## 📊 Configuration Options

    | Option         | Type    | Description                        |
    |----------------|---------|------------------------------------|
    | `edgeColor`    | string  | Default edge color                 |
    | `edgeWidth`    | number  | Base edge width                    |
    | `nodeSize`     | number  | Node size in pixels                |
    | `nodeColor`    | string  | Default node color                 |
    | `inPrison`     | boolean | Show prisoners as squares          |
    | `showRelation` | boolean | Bold related edges                 |
    | `showBirthplace`| boolean | Highlight birthplace connections  |
    | `showGender`   | boolean | Color nodes by gender              |

    7. ## Customization

    - Edit `public/js/networkGraph.js` to adjust mapping logic or add new features.
    - Modify the configuration object to change default styles and behaviors.

    ## License

    This project is for prototyping and demonstration purposes.