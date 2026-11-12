<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AK OneTap Panel</title>
    <style>
        body {
            margin: 0;
            background: #0f0f0f;
            font-family: Arial, sans-serif;
            color: white;
            height: 100vh;
            overflow: hidden;
        }
        #floating-panel {
            position: absolute;
            top: 100px;
            left: 100px;
            width: 260px;
            background: rgba(20, 20, 20, 0.95);
            border: 2px solid #ff4757;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(255, 71, 87, 0.5);
            user-select: none;
            z-index: 1000;
        }
        .panel-header {
            background: #ff4757;
            padding: 10px;
            font-weight: bold;
            text-align: center;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            cursor: move;
        }
        .panel-body {
            padding: 15px;
        }
        .control-group {
            margin-bottom: 12px;
        }
        .control-group label {
            font-size: 13px;
            display: block;
            margin-bottom: 5px;
        }
        .control-group input[type="range"] {
            width: 100%;
        }
        .toggle-btn {
            width: 100%;
            padding: 9px;
            background: #2ed573;
            border: none;
            color: white;
            font-weight: bold;
            border-radius: 5px;
            cursor: pointer;
            margin-top: 5px;
        }
    </style>
</head>
<body>

    <div id="floating-panel">
        <div class="panel-header" id="panel-header">AK OneTap Panel</div>
        <div class="panel-body">
            <div class="control-group">
                <label>Aim Sensitivity: <span id="sens-val">2.0</span>X</label>
                <input type="range" min="1" max="5" step="0.1" value="2.0" id="sensRange">
            </div>
            <div class="control-group">
                <label>DPI Scale: <span id="dpi-val">560</span></label>
                <input type="range" min="400" max="900" step="10" value="560" id="dpiRange">
            </div>
            <button class="toggle-btn" id="toggleBtn">Activate Panel</button>
        </div>
    </div>

    <script>
        // Draggable Panel Logic
        const panel = document.getElementById('floating-panel');
        const header = document.getElementById('panel-header');

        let isDragging = false;
        let startX, startY;

        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.clientX - panel.offsetLeft;
            startY = e.clientY - panel.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            panel.style.left = (e.clientX - startX) + 'px';
            panel.style.top = (e.clientY - startY) + 'px';
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // Touch support for mobile phones
        header.addEventListener('touchstart', (e) => {
            isDragging = true;
            let touch = e.touches[0];
            startX = touch.clientX - panel.offsetLeft;
            startY = touch.clientY - panel.offsetTop;
        });

        document.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            let touch = e.touches[0];
            panel.style.left = (touch.clientX - startX) + 'px';
            panel.style.top = (touch.clientY - startY) + 'px';
        });

        document.addEventListener('touchend', () => {
            isDragging = false;
        });

        // Controls Logic
        const sensRange = document.getElementById('sensRange');
        const sensVal = document.getElementById('sensVal');
        sensRange.addEventListener('input', (e) => {
            sensVal.textContent = e.target.value;
        });

        const dpiRange = document.getElementById('dpiRange');
        const dpiVal = document.getElementById('dpi-val');
        dpiRange.addEventListener('input', (e) => {
            dpiVal.textContent = e.target.value;
        });

        const toggleBtn = document.getElementById('toggleBtn');
        toggleBtn.addEventListener('click', () => {
            if (toggleBtn.style.background === 'rgb(46, 213, 115)' || toggleBtn.style.background == '#2ed573') {
                toggleBtn.style.background = '#ff4757';
                toggleBtn.textContent = 'Deactivated';
            } else {
                toggleBtn.style.background = '#2ed573';
                toggleBtn.textContent = 'Activated';
            }
        });
    </script>
</body>
</html>
