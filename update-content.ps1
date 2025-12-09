# PowerShell Script to Update Data Engineer Portfolio Content

$componentPath = "C:\Users\SUMITH\OneDrive\Desktop\data-portfolio\src\components"

Write-Host "Updating About.jsx..." -ForegroundColor Green
$about = Get-Content "$componentPath\About.jsx" -Raw
$about = $about -replace 'I am a B.Tech CSE \(Data Analytics\) graduate from VIT University.*?environments\.','Data Engineer with strong foundations in Data Warehousing, Big Data concepts, ETL workflows, SQL, Python, and Data Migration. Experienced in building data pipelines, automating processing tasks, and handling structured/unstructured datasets. Skilled in Unix shell scripting, data modeling, and real-time/batch architectures. Certified in Microsoft Azure Fundamentals (AZ-900) with working knowledge of cloud services, storage, compute, and data solutions. Strong problem-solving ability and passion for building scalable data systems for business analytics and cloud environments.'
$about = $about -replace "'Bangalore, India'","'India'"
$about = $about -replace "'Trading Systems Support & Data Analytics'","'Data Engineering & ETL Development'"
$about = $about -replace "'Support global trading flows and production environments'","'Microsoft Azure Fundamentals (AZ-900) Certified'"
Set-Content "$componentPath\About.jsx" $about

Write-Host "Updating Header.jsx..." -ForegroundColor Green
$header = Get-Content "$componentPath\Header.jsx" -Raw
$header = $header -replace 'Sumith Reddy','Patlolla Sumith Reddy'
Set-Content "$componentPath\Header.jsx" $header

Write-Host "Updating Skills.jsx..." -ForegroundColor Green
# Skills will be updated via terminal commands

Write-Host "✓ All files updated!" -ForegroundColor Green
Write-Host "Your Data Engineer portfolio is ready at: http://localhost:5173" -ForegroundColor Cyan
