let file_container = document.querySelector('.file_container');
let file = document.querySelector('.file_box');
let selectbtn = document.getElementsByClassName('select')[0];
let fileUploadBtn = document.querySelector('.uploader input');
let uploadedFiles = document.querySelector('.uploaded-files');
let no_file_msg = document.querySelector('.no_file_msg');



selectbtn.addEventListener('click', e => {
    fileUploadBtn.click();
});

fileUploadBtn.addEventListener('change', e => {
    selectbtn.style.display = 'none';
    if (fileUploadBtn.files.length != 0) {
        for (let i = 0; i < fileUploadBtn.files.length; i++) {
            let temp = document.createElement('li');
            temp.innerHTML = fileUploadBtn.files[i].name;
            uploadedFiles.appendChild(temp);
        }
    }
});

if (file_container.childElementCount == 2) {
    no_file_msg.style.display = 'block';
    file.style.display = 'none';
}
else {
    no_file_msg.style.display = 'none';
    file.style.display = 'flex';
}