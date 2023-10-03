const exampleBtn = document.getElementById('createGlobalItem');
alert('start');
exampleBtn.addEventListener('click', () => {
  //window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa', '_blank');
//window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa',"Ratting","width=550,height=170,left=150,top=200,toolbar=0,status=0,");
 //var menubar= document.getElementById('ak-jira-navigation');
  //menubar.style.display = 'none';
  window.open('https://olgame.atlassian.net/jira/secure/CreateIssue.jspa','New Issue','width=600,height=600,location=no,toolbar=no,menubar=no' );
   //var menubar= document.getElementById('ak-jira-navigation');
  //menubar.style.display = 'none';
  alert('end');
});
