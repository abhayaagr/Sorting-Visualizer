# Sorting Algorithm Visualizer

This **Sorting Algorithm Visualizer** is built using **HTML, CSS, and JavaScript** to provide an interactive way to understand sorting algorithms. It visually represents different sorting techniques, allowing users to observe how elements are compared, swapped, and sorted step by step.

## 🔥 Features
- **Supports Multiple Sorting Algorithms**: Each algorithm is managed through separate JS files, making it scalable and maintainable.
- **Fully Responsive**: Works seamlessly on desktops, tablets, and mobile devices.
- **Interactive UI**: Users can adjust the array size and sorting speed.
- **Color-Coded Visualization**: Highlights different stages of sorting for better understanding.
- **Custom Favicon**: Includes a favicon to enhance the website's appearance.

## 📂 Project Structure

```bash
📦 Sorting-Visualizer
├── 📂 css                 # Contains all CSS files for styling
│   ├── 🎨 style.css       # Main CSS file
├── 📂 js                  # Contains JavaScript files for sorting algorithms
│   ├── 🔵 bubbleSort.js    # Bubble Sort logic
│   ├── 🟢 selectionSort.js # Selection Sort logic
│   ├── 🔴 insertionSort.js # Insertion Sort logic
│   ├── 🟣 quickSort.js     # Quick Sort logic
│   ├── 🟡 mergeSort.js     # Merge Sort logic
│   ├── ⚙️ main.js         # Controls UI interactions
│   ├── ⚙️ visualization.js # Controls visualization of changes
├── 📂 media               # Contains images, icons, and other assets
│   ├── 🌐 favicon.ico      # Favicon for the website
│   ├── 🖼️ logo.png        # Logo image
├── 📄 index.html          # Main HTML file
```

## 🎨 Color Theme
The visualizer uses different colors to represent various states of the bars during sorting:

| State                | CSS Class      | Color                        
|----------------------|----------------|------------------------------|
| Default              | `.default-Bar` | 🖤 **Black** (Text: White)  
| Currently Comparing  | `.focus-Bar`   | 🔵 **Cyan (#00FFFF)**       
| Incorrect Position   | `.error-Bar`   | 🔴 **Crimson (#DC143C)**     
| Being Modified       | `.modify-Bar`  | 🟠 **Amber (#FFB300)**       
| Sorted               | `.sorted-Bar`  | ⚪ **White** (Text: Black)   

## 🚀 How to Run the Project
1. **Clone the repository**:
   git clone https://github.com/abhayaagr/Sorting-Visualizer.git
2. Navigate to the project folder:
   cd Sorting-Visualizer
3. Open the index.html file in any modern web browser.

## 🛠️ Technologies Used
- HTML5 – Structure of the visualizer.
- CSS3 – Styling and responsiveness.
- JavaScript – Sorting logic and animations.

## 🔮 Future Enhancements
- Add more sorting algorithms (Heap Sort, Radix Sort, etc.).
- Implement sound effects for sorting steps.
- Add a "Pause/Resume" feature during sorting.
- Enhance UI with animations and transitions.
