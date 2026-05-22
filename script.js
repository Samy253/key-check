let insert=document.getElementById('insert');

window.addEventListener('keydown',(e)=>{
    insert.innerHTML=`
        <table>
  <caption>
    key typed
  </caption>
  <thead>
    <tr>
      <th scope="col">Key</th>
      <th scope="col">Key Code</th>
      <th scope="col">Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${e.key===" "?'space':e.key}</th>
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
    </tr>
    
  </tbody>
  
</table>
    `;
});