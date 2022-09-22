Include "HJGlobal.jsh"
Include "HJConst.jsh"
Include "MSAA.jsh"

Globals
Int bDebugMode

; Insert other functions and scripts for the application here

String Function RegistryRead(String sKey)
; Get a string from the registry
Var
Object oShell, Object oNull,
String sReturn

Let oShell =CreateObject("Wscript.Shell")
Let sReturn =oShell.RegRead(sKey)
Let sReturn =oShell.ExpandEnvironmentStrings(sReturn)

Let oShell = oNull
Return sReturn
EndFunction

String Function GetWindowsVersion()
; Get name of Windows version (Windows NT and above)
Var
String sKey, String sSubkey,  String sValueName

Let sKey = "HKEY_LOCAL_MACHINE"
Let sSubkey = "SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion"
Let sValueName = "ProductName"

Return RegistryRead(sKey + "\\" + sSubkey + "\\" + sValueName)
EndFunction

String Function GetJAWSVersion()
; Get version of JAWS
Var
Int iIndex,
String sVersion

Let sVersion = GetJAWSDirectory()
Let iIndex = StringContains(sVersion, "JAWS")
Let sVersion = SubString(sVersion, iIndex, StringLength(sVersion))
Let sVersion = StringReplaceChars(sVersion, "\\", " ")
Return sVersion
EndFunction

String Function GetMSAAStateText(Int iBits)
; Get text of MSAA states
Var
string sReturn

If iBits & msaa_state_unavailable then
let sReturn = sReturn + "unavailable "
endIf
If iBits & msaa_state_selected then
let sReturn = sReturn + "selected "
endIf
If iBits & msaa_state_focused then
let sReturn = sReturn + "focused "
endIf
If iBits & msaa_state_pressed then
let sReturn = sReturn + "pressed "
endIf
If iBits & msaa_state_checked then
let sReturn = sReturn + "checked "
endIf
If iBits & msaa_state_mixed then
let sReturn = sReturn + "mixed "
endIf
If iBits & msaa_state_readonly then
let sReturn = sReturn + "readonly "
endIf
If iBits & msaa_state_hottracked then
let sReturn = sReturn + "hottracked "
endIf
If iBits & msaa_state_default then
let sReturn = sReturn + "default "
endIf
If iBits & msaa_state_expanded then
let sReturn = sReturn + "expanded "
endIf
If iBits & msaa_state_collapsed then
let sReturn = sReturn + "collapsed "
endIf
If iBits & msaa_state_busy then
let sReturn = sReturn + "busy "
endIf
If iBits & msaa_state_floating then
let sReturn = sReturn + "floating "
endIf
If iBits & msaa_state_marqueed then
let sReturn = sReturn + "marqueed "
endIf
If iBits & msaa_state_animated then
let sReturn = sReturn + "animated "
endIf
If iBits & msaa_state_invisible then
let sReturn = sReturn + "invisible "
endIf
If iBits & msaa_state_offscreen then
let sReturn = sReturn + "offscreen "
endIf
If iBits & msaa_state_sizeable then
let sReturn = sReturn + "sizeable "
endIf
If iBits & msaa_state_moveable then
let sReturn = sReturn + "moveable "
endIf
If iBits & msaa_state_selfvoicing then
let sReturn = sReturn + "selfvoicing "
endIf
If iBits & msaa_state_focusable then
let sReturn = sReturn + "focusable "
endIf
If iBits & msaa_state_selectable then
let sReturn = sReturn + "selectable "
endIf
If iBits & msaa_state_linked then
let sReturn = sReturn + "linked "
endIf
If iBits & msaa_state_traversed then
let sReturn = sReturn + "traversed "
endIf
If iBits & msaa_state_multiselectable then
let sReturn = sReturn + "multiselectable "
endIf
If iBits & msaa_state_extselectable then
let sReturn = sReturn + "extselectable "
endIf
If iBits & msaa_state_alert_low then
let sReturn = sReturn + "alert_low "
endIf
If iBits & msaa_state_alert_medium then
let sReturn = sReturn + "alert_medium "
endIf
If iBits & msaa_state_alert_high then
let sReturn = sReturn + "alert_high "
endIf
If iBits & msaa_state_protected then
let sReturn = sReturn + "protected "
endIf
If iBits & msaa_state_valid then
let sReturn = sReturn + "valid "
endIf
Let sReturn = StringTrimTrailingBlanks(sReturn)
Return sReturn
EndFunction
String Function GetMSAAInfo(int iGeneration)
; Get string of various MSAA information
Var
Int i, Int iCount, Int iFocus, Int iChildren,
Handle h,
Object oParent, Object oPoint, Object o, Object oNull,
String sReturn, String sRole, String sName, String sValue, String sState, String sHelp, String sDescription, String sKeyboardShortcut, String sDefaultAction

Let sReturn = "MSAA Children"
Let o = GetCurrentObject(i)
If iGeneration == 2 Then
Let sReturn = "MSAA Ancestors"
Let o = o.AccParent.AccParent
ElIf iGeneration == 1 Then
Let sReturn = "MSAA Siblings"
Let o = o.AccParent
EndIf

Let iCount = o.AccChildCount
Let sReturn = sReturn + "\r\n" + GetJAWSVersion() + " on " + GetWindowsVersion() + "\r\n"
Let sReturn = sReturn + IntToString(iCount) + " Children" + "\r\n"
Let i = 0
While i <= iCount
If i == 0 Then
Let sReturn = "\r\n" + sReturn + "Parent ID=" + IntToString(i) + "\r\n"
Else
Let sReturn = "\r\n" + sReturn + "ID=" + IntToString(i) + "\r\n"
EndIf
Let sRole = GetRoleText(o.AccRole(i))
If !StringIsBlank(sRole) Then Let sReturn = sReturn + "Role=" + sRole + "\n" EndIf
Let sName = o.AccName(i)
If !StringIsBlank(sName) Then Let sReturn = sReturn + "Name=" + sName + "\n" EndIf
Let sValue = o.AccValue(i)
If !StringIsBlank(sValue) Then Let sReturn = sReturn + "Value=" + sValue + "\n" EndIf
Let iFocus = o.AccFocus(i)
If iFocus Then Let sReturn = sReturn + "Focus=" + IntToString(iFocus) + "\n" EndIf
Let sState = GetMSAAStateText(o.AccState(i))
If !StringIsBlank(sState) Then Let sReturn = sReturn + "State=" + sState + "\n" EndIf
Let sHelp = o.AccHelp(i)
If !StringIsBlank(sHelp) Then Let sReturn = sReturn + "Help=" + sHelp + "\n" EndIf
Let sDescription = o.AccDescription(i)
If !StringIsBlank(sDescription) Then Let sReturn = sReturn + "Description=" + sDescription + "\n" EndIf
Let sKeyboardShortcut = o.AccKeyboardShortcut(i)
If !StringIsBlank(sKeyboardShortcut) Then Let sReturn = sReturn + "KeyboardShortcut=" + sKeyboardShortcut + "\n" EndIf
Let sDefaultAction = o.AccDefaultAction(i)
If !StringIsBlank(sDefaultAction) Then Let sReturn = sReturn + "DefaultAction=" + sDefaultAction + "\n" EndIf
Let iChildren = o.AccChildCount(i)
If iChildren Then Let sReturn = sReturn + "Children=" + IntToString(iChildren) + "\n" EndIf
Let i = i + 1
EndWhile
Let o = oNull
Let sReturn = StringTrimLeadingBlanks(StringTrimTrailingBlanks(sReturn))
Return sReturn
EndFunction
Script ShowMSAAAncestors()
; Show MSAA properties for parent of current object and above
Var
String sText

SayString("Show")
Let sText = GetMSAAInfo(2)
ShowVirtual(sText)
EndScript

Script ShowMSAASiblings()
; Show MSAA properties for current object and siblings
Var
String sText

SayString("Show")
Let sText = GetMSAAInfo(1)
ShowVirtual(sText)
EndScript

Script ShowMSAAChildren()
; Show MSAA properties for current object and children
Var
String sText

SayString("Show")
Let sText = GetMSAAInfo(0)
ShowVirtual(sText)
EndScript

Void Function ShowVirtual(String sText)
; Show text in virtual viewer, or copy to clipboard if too large

If StringLength(sText) > 60000 Then
SayString("Text too large for virtual viewer, so copying to clipboard instead")
CopyToClipboard(sText)
Return
EndIf

Let sText = sText + "\r\n\r\nPress Escape to close this message"
UserBufferDeactivate()
UserBufferClear()
UserBufferAddText(sText)
UserBufferActivate()
JAWSTopOfFile()
SayLine()
EndFunction

Script ToggleDebugMode()
; Toggle mode in which events are announced

If bDebugMode Then
SayString("No debug mode")
Let bDebugMode = False
Else
SayString("Debug mode on")
Let bDebugMode = True
EndIf
EndScript

Void Function SayIfDebug(String sText, Int bNoDebug)
; Say event name if global and local debug mode is on

If bDebugMode && !bNoDebug Then
SayString(sText)
EndIf
EndFunction

Int Function IsContext1()
; Test for first application context

Return False
EndFunction

Int Function IsContext2()
; Test for second application context

Return False
EndFunction

Script TestCode()
; Use this script for testing code with Control+F12

EndScript

Void Function ActiveItemChangedEvent (handle curHwnd, int curObjectId, int curChildId, handle prevHwnd, int prevObjectId, int prevChildId)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ActiveItemChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ActiveItemChangedEvent (curHwnd, curObjectId, curChildId, prevHwnd, prevObjectId, prevChildId)
EndIf
EndFunction

void Function ApplicationModeEvent( int flags )
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ApplicationModeEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ApplicationModeEvent( flags )
EndIf
EndFunction

Void Function AppWillNotSpeakEvent(string strApp)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("AppWillNotSpeakEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return AppWillNotSpeakEvent(strApp)
EndIf
EndFunction

Void Function AutoFinishEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("AutoFinishEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return AutoFinishEvent()
EndIf
EndFunction

Void Function AutoStartEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("AutoStartEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return AutoStartEvent()
EndIf
EndFunction

Void Function BottomEdgeEvent(handle WinHandle)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("BottomEdgeEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return BottomEdgeEvent(WinHandle)
EndIf
EndFunction

Void Function ClipboardChangedEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ClipboardChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ClipboardChangedEvent()
EndIf
EndFunction

void Function ControllerModeChangedEvent(int mode)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ControllerModeChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ControllerModeChangedEvent(mode)
EndIf
EndFunction

void Function CrossedListBoundaryEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("CrossedListBoundaryEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return CrossedListBoundaryEvent()
EndIf
EndFunction

void Function CrossedTableBoundaryEvent(int iPrevTableIndex, int iPrevTableLevel, int iCurTableIndex, int iCurTableLevel)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("CrossedTableBoundaryEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return CrossedTableBoundaryEvent(iPrevTableIndex, iPrevTableLevel, iCurTableIndex, iCurTableLevel)
EndIf
EndFunction

Void Function CursorShapeChangedEvent(string CursorType)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("CursorShapeChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return CursorShapeChangedEvent(CursorType)
EndIf
EndFunction

Void Function DescriptionChangedEvent(handle hwnd, int objId, int childId, int nObjType, string sOldDescription, string sNewDescription)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("DescriptionChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return DescriptionChangedEvent(hwnd, objId, childId, nObjType, sOldDescription, sNewDescription)
EndIf
EndFunction

Void Function DialogPageChangedEvent(HANDLE hwndNewPage,HANDLE hwndOldPage)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("DialogPageChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
; Return DialogPageChangedEvent(HANDLE hwndNewPage,HANDLE hwndOldPage)
EndIf
EndFunction

Void Function DocumentLoadedEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("DocumentLoadedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return DocumentLoadedEvent()
EndIf
EndFunction

int Function ExplorerPaneFocusChangedEvent(handle FocusWindow, handle PrevWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ExplorerPaneFocusChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ExplorerPaneFocusChangedEvent(FocusWindow, PrevWindow)
EndIf
EndFunction

Void Function FocusChangedEvent(handle FocusWindow, handle PrevWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("FocusChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return FocusChangedEvent(FocusWindow, PrevWindow)
EndIf
EndFunction

Void Function FocusPointMovedEvent(int nX, int nY, int nOldX, int nOldY, int nUnit, int nDir, int nTimeElapsed)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("FocusPointMovedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return FocusPointMovedEvent(nX, nY, nOldX, nOldY, nUnit, nDir, nTimeElapsed)
EndIf
EndFunction

void Function ForegroundIconicEvent(HANDLE hwndForeground)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ForegroundIconicEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
; Return ForegroundIconicEvent(HANDLE hwndForeground)
EndIf
EndFunction

Void Function ForegroundWindowChangedEvent(handle newWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ForegroundWindowChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ForegroundWindowChangedEvent(newWindow)
EndIf
EndFunction

void Function FormsModeEvent(int bEntering)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("FormsModeEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return FormsModeEvent(bEntering)
EndIf
EndFunction

void Function FrameLoadedEvent(handle hDoc, string sFrameName, int nFrameIndex)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("FrameLoadedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return FrameLoadedEvent(hDoc, sFrameName, nFrameIndex)
EndIf
EndFunction

void Function HelpBalloonEvent(handle hwnd, string sText)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("HelpBalloonEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return HelpBalloonEvent(hwnd, sText)
EndIf
EndFunction

Void Function InternalFrameChangedEvent(handle hwnd, handle idFrame, string strFrameName)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("InternalFrameChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return InternalFrameChangedEvent(hwnd, idFrame, strFrameName)
EndIf
EndFunction

Void Function ItemNotFoundEvent(int hwnd)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ItemNotFoundEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ItemNotFoundEvent(hwnd)
EndIf
EndFunction

Void Function JavaFocusChangedEvent(handle FocusWindow, handle PrevWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("JavaFocusChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return JavaFocusChangedEvent(FocusWindow, PrevWindow)
EndIf
EndFunction

void Function KeyboardLanguageChangedEvent(string sLayoutName, int nLangId, string sLangAbbrev)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("KeyboardLanguageChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return KeyboardLanguageChangedEvent(sLayoutName, nLangId, sLangAbbrev)
EndIf
EndFunction

void Function KeymapChangedEvent(int iKeyCode, string sKeyName, int iKeyStatus)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("KeymapChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return KeymapChangedEvent(iKeyCode, sKeyName, iKeyStatus)
EndIf
EndFunction

Void Function KeyPressedEvent(int nKey, string strKeyName, int nIsBrailleKey, int nIsScriptKey)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("KeyPressedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return KeyPressedEvent(nKey, strKeyName, nIsBrailleKey, nIsScriptKey)
EndIf
EndFunction

void Function LineSpacingChangedEvent(int nLineSpacing, int nLineSpacingRule)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("LineSpacingChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return LineSpacingChangedEvent(nLineSpacing, nLineSpacingRule)
EndIf
EndFunction

Void Function MenuModeEvent(handle WinHandle, int mode)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("MenuModeEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return MenuModeEvent(WinHandle, mode)
EndIf
EndFunction

void Function MouseButtonEvent(int eventID, int x, int y)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("MouseButtonEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return MouseButtonEvent(eventID, x, y)
EndIf
EndFunction

Void Function MouseMovedEvent(int x, int y)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("MouseMovedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return MouseMovedEvent(x, y)
EndIf
EndFunction

void Function MSAAAlertEvent(handle hwnd, int nTime, string sText, int nAlertLevel)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("MSAAAlertEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return MSAAAlertEvent(hwnd, nTime, sText, nAlertLevel)
EndIf
EndFunction

Void Function NameChangedEvent(handle hwnd, int objId, int childId, int nObjType, string sOldName, string sNewName)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("NameChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return NameChangedEvent(hwnd, objId, childId, nObjType, sOldName, sNewName)
EndIf
EndFunction

void Function NavigationWrappedEvent(int bForward)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("NavigationWrappedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return NavigationWrappedEvent(bForward)
EndIf
EndFunction

Void Function NewTextEvent (handle hwnd, string buffer, int nAttributes, int nTextColor, int nBackgroundColor, int nEcho, string sFrameName)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("NewTextEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return NewTextEvent(hwnd, buffer, nAttributes, nTextColor,nBackgroundColor,nEcho,sFrameName)
EndIf
EndFunction

void Function ObjStateChangedEvent(handle hObj, int iObjType, int nChangedState, int nState, int nOldState)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ObjStateChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ObjStateChangedEvent(hObj, iObjType, nChangedState, nState, nOldState)
EndIf
EndFunction

void Function PageChangedEvent(handle hWnd, string PageName )
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("PageChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return PageChangedEvent(hWnd, PageName )
EndIf
EndFunction

void Function PageSectionColumnChangedEvent(int nPageNumber, int nPrevPageNumber, int nSectionNumber, int nPrevSectionNumber, int nTextColumnNumber, int nPrevTextColumnNumber, int nTextColumnCount, int nPrevTextColumnCount)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("PageSectionColumnChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return PageSectionColumnChangedEvent(nPageNumber, nPrevPageNumber, nSectionNumber, nPrevSectionNumber, nTextColumnNumber, nPrevTextColumnNumber, nTextColumnCount, nPrevTextColumnCount)
EndIf
EndFunction

void Function ProcessEventOnFocusChangedEvent(handle AppWindow, handle RealWindow, string RealWindowName, handle FocusWindow, handle PrevWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ProcessEventOnFocusChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ProcessEventOnFocusChangedEvent(AppWindow, RealWindow, RealWindowName, FocusWindow, PrevWindow)
EndIf
EndFunction

void Function ProgressBarChangedEvent(handle hProgress, string sName, string sValue)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ProgressBarChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ProgressBarChangedEvent(hProgress, sName, sValue)
EndIf
EndFunction

void Function RemoteControllerModeChangedEvent(int mode)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("RemoteControllerModeChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return RemoteControllerModeChangedEvent(mode)
EndIf
EndFunction

Void Function SayAllStoppedEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("SayAllStoppedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return SayAllStoppedEvent()
EndIf
EndFunction

void Function SayLastTipFromEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("SayLastTipFromEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return SayLastTipFromEvent()
EndIf
EndFunction

void Function ScreenStabilizedEvent(handle hwndLastScreenWrite)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ScreenStabilizedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ScreenStabilizedEvent(hwndLastScreenWrite)
EndIf
EndFunction

void Function SkimReadStoppedEvent(int nSkimReadingMode, int nMatches, int bSummarize)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("SkimReadStoppedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return SkimReadStoppedEvent(nSkimReadingMode, nMatches, bSummarize)
EndIf
EndFunction

Void Function SpeechToggledEvent(int bSpeechOn)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("SpeechToggledEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return SpeechToggledEvent(bSpeechOn)
EndIf
EndFunction

void Function TableEnteredEvent(int nTblCols, int nTblRows, int nTblNesting, int nCurCol, int nCurRow, int bUniform, int bHasMarkedHeaders, int nHeadersColumn, int nHeadersRow )
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TableEnteredEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TableEnteredEvent(nTblCols, nTblRows, nTblNesting, nCurCol, nCurRow, bUniform, bHasMarkedHeaders, nHeadersColumn, nHeadersRow )
EndIf
EndFunction

void Function TableExitedEvent()
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TableExitedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TableExitedEvent()
EndIf
EndFunction

void Function TabStopEvent(string sNewPos)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TabStopEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TabStopEvent(sNewPos)
EndIf
EndFunction

void Function TandemConnectionEvent(int nTandemApp, int nConnectionEvent)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TandemConnectionEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TandemConnectionEvent(nTandemApp, nConnectionEvent)
EndIf
EndFunction

void Function TextSelectedEvent(string strText, int bUnSelecting, int bContainsSpeechMarkup)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TextSelectedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TextSelectedEvent(strText, bUnSelecting, bContainsSpeechMarkup)
EndIf
EndFunction

Void Function TooltipEvent(handle hWnd, string strText)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TooltipEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TooltipEvent(hWnd, strText)
EndIf
EndFunction

Void Function TopEdgeEvent(handle WindowHandle)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("TopEdgeEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return TopEdgeEvent(WindowHandle)
EndIf
EndFunction

void Function tutorMessageEvent(handle hwndFocus, int nMenuMode)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("tutorMessageEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return tutorMessageEvent(hwndFocus, nMenuMode)
EndIf
EndFunction

Void Function ValueChangedEvent(handle hwnd, int objId, int childId, int nObjType, string sObjName, string sObjValue,int bIsFocusObject)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("ValueChangedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return ValueChangedEvent(hwnd, objId, childId, nObjType, sObjName, sObjValue,bIsFocusObject)
EndIf
EndFunction

void Function VideoToggledEvent(INT bEnabled)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("VideoToggledEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return VideoToggledEvent(bEnabled)
EndIf
EndFunction

void Function WindowActivatedEvent(handle hWnd)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("WindowActivatedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return WindowActivatedEvent(hWnd)
EndIf
EndFunction

Void Function WindowCreatedEvent(handle hWindow, int nLeft, int nTop, int nRight, int nBottom)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("WindowCreatedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return WindowCreatedEvent(hWindow, nLeft, nTop, nRight, nBottom)
EndIf
EndFunction

Void Function WindowDestroyedEvent(handle hWindow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("WindowDestroyedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return WindowDestroyedEvent(hWindow)
EndIf
EndFunction

Void Function WindowMinMaxEvent(handle hWindow, int nMinMaxRest, int nShow)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("WindowMinMaxEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return WindowMinMaxEvent(hWindow, nMinMaxRest, nShow)
EndIf
EndFunction

Void Function WindowResizedEvent(handle hWindow, int nLeft, int nTop, int nRight, int nBottom)
Var
Int bNoDebug

; Let bNoDebug = True
SayIfDebug("WindowResizedEvent", bNoDebug)

If IsContext1() Then
ElIf IsContext2() Then
Else
Return WindowResizedEvent(hWindow, nLeft, nTop, nRight, nBottom)
EndIf
EndFunction