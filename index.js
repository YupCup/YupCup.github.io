const date = new Date();
const dateNumber = date.getFullYear() * 10000 + date.getMonth() * 100 + date.getDate();

CheckForDateChange();

CheckForOldVersion();

MergeMainContentLists();
MergeFreespaceContentLists();

boxes = document.getElementsByClassName("box");

boxesClicked = [];
FillClickList();

boxContentIndexes = [];
if (localStorage.getItem("ContentIndexes") != null) {
    boxContentIndexes = JSON.parse(localStorage.getItem("ContentIndexes"));
}

for (let i = 0; i < boxes.length; i++) {
    para = document.createElement("p");
    FillBox(i);
    AppendBox(i);
}

localStorage.setItem("ContentIndexes", JSON.stringify(boxContentIndexes));

function CheckForLineComplete() {
    allCleared = true;
    for (let i=0; i<boxesClicked.length; i++) {
        if (boxesClicked[i] == false)
            allCleared = false;
    }

    for (let i=0; i<boxes.length; i++) {
        SetClassActive(boxes[i].classList, "rainbow", allCleared);
    }

    CheckHorizontal();
    CheckVertical();
    CheckDiagonal();
}

function CheckForDateChange() {
    if (localStorage.getItem("lastDate") != null) {
        if (localStorage.getItem("lastDate") != dateNumber) {
            ResetBoard();
        }
    }

    localStorage.setItem("lastDate", dateNumber);
}

function CheckForOldVersion() {
    if (localStorage.getItem("userid") != null || localStorage.getItem("lastRandomSeed") != null)
        ResetOldBoard();
}

function ResetBoard() {
    localStorage.removeItem("boxesClicked");
    localStorage.removeItem("ContentIndexes");
    localStorage.removeItem("ListLengthLimits");
    localStorage.removeItem("FreeSpaceListLengthLimits");
}

function ResetOldBoard() {
    ResetBoard();
    
    localStorage.removeItem("userid");
    localStorage.removeItem("lastRandomSeed");
}

function MergeFreespaceContentLists() {
    mergedFreespaceList = MergeContentLists(freeSpacesDayList, "FreeSpaceListLengthLimits");
}

function MergeMainContentLists() {
    mergedList = MergeContentLists(dayList, "ListLengthLimits");
}

function MergeContentLists(_dayList, localStorageName) {
    _mergedList = []
    dayToEuropeanStandard = (6 + date.getDay()) % 7;
    listsToMerge = _dayList[dayToEuropeanStandard];

    LimitListLength(localStorageName); // To allow modifying lists during day

    for (let i=0; i<listsToMerge.length; i++) {
        _mergedList = [..._mergedList, ...listsToMerge[i]];
    }

    return _mergedList;
}

function LimitListLength(localStorageName) {
    listLengthLimits = [];
    if (localStorage.getItem(localStorageName) != null) {
        listLengthLimits = JSON.parse(localStorage.getItem(localStorageName));

        for (let i=0; i<listsToMerge.length; i++)
            listsToMerge[i].length = listLengthLimits[i];
    } 
    else {
        SaveLengthLimits(localStorageName);
    }
}

function SaveLengthLimits(localStorageName) {
    listLengthLimits.push(bingoContent.length);
    for (let i=0; i<listsToMerge.length; i++)
        listLengthLimits.push(listsToMerge[i].length);

    localStorage.setItem(localStorageName, JSON.stringify(listLengthLimits));
}

function FillClickList() {
    if (localStorage.getItem("boxesClicked") == null)
        CreateClickList();
    else
        FillClickListFromStorage();
}

function CreateClickList() {
    for (let i = 0; i<boxes.length; i++)
        boxesClicked.push(false);

    localStorage.setItem("boxesClicked", JSON.stringify(boxesClicked));
}

function FillClickListFromStorage() {
    boxesClicked = JSON.parse(localStorage.getItem("boxesClicked"));

    for (let i = 0; i<boxesClicked.length; i++) {
        if (boxesClicked[i])
            boxes[i].classList.add("clicked");
    }

    CheckForLineComplete();
}

function FillBox(index) {
    contentList = mergedList;
    prefix = "";
    if (index == 12) {
        contentList = mergedFreespaceList;
        prefix = "FREE SPACE:\n";
    }

    contentIndex = 0;
    if (boxContentIndexes.length > index)
        contentIndex = boxContentIndexes[index];
    else {
        contentIndex = GetRandomContentIndex();
        boxContentIndexes.push(contentIndex);
    }

    
    node = document.createTextNode(prefix + contentList[contentIndex]);
}

function GetRandomContentIndex() {
    randomIndex = Math.floor(Math.random() * contentList.length);
    while (boxContentIndexes.includes(randomIndex))
        randomIndex = Math.floor(Math.random() * contentList.length);

    return randomIndex;
}

function AppendBox(index) {
    para.appendChild(node);
    boxes[index].appendChild(para);
    boxes[index].style.setProperty('--n', index%5+index/5);

    boxes[index].addEventListener("mousedown", (event) => {
        ClickBox(event.target.classList, index);
    });
}

function ClickBox(classList, index) {
    ToggleClass(classList, "clicked")
        
    boxesClicked[index] = classList.contains("clicked");
    localStorage.setItem("boxesClicked", JSON.stringify(boxesClicked));

    CheckForLineComplete();
}

function ToggleClass(classList, className) {
    if (!classList.contains(className))
            classList.add(className);
        else
            classList.remove(className);
}

function SetClassActive(classList, className, active) {
    if (active) 
        classList.add(className);
    else {
        if (classList.contains(className))
            classList.remove(className);
    }
}

function CheckHorizontal() {
    for (let x = 0; x<5; x++) {
        lineClear = true;
        for (let y = 0; y<5; y++) {
            if (!boxesClicked[y*5+x]) {
                lineClear = false;
            }
        }

        for (let y = 0; y<5; y++) {
            SetClassActive(boxes[y*5+x].classList, "cleared", lineClear);
        }
    }
}

function CheckVertical() {
    for (let x = 0; x<5; x++) {
        lineClear = true;
        for (let y = 0; y<5; y++) {
            if (!boxesClicked[y+x*5]) {
                lineClear = false;
            }
        }

        if (!lineClear)
            continue;

        for (let y = 0; y<5; y++) {
            boxes[y+x*5].classList.add("cleared");
        }
    }
}

function CheckDiagonal() {
    for (let i = 0; i<2; i++) {
        lineClear = true;
        for (let j = i; j<5+i; j++) {
            if (!boxesClicked[j*(6-2*i)]) {
                lineClear = false;
            }
        }

        if (!lineClear)
            continue;

        for (let j = i; j<5+i; j++) {
            boxes[j*(6-2*i)].classList.add("cleared");
        }
    }
}