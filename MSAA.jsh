Const

;Mouse constants
msaa_MB_LEFTBUTTON      = 0,
msaa_MB_MIDDLEBUTTON	   = 1,
msaa_MB_RIGHTBUTTON	   = 2,

;Special object IDs
msaa_OBJID_WINDOW        = 0x00000000,
msaa_OBJID_SELF          = 0x00000000,
msaa_OBJID_SYSMENU       = 0xFFFFFFFF,
	msaa_OBJID_TITLEBAR      = 0xFFFFFFFE,
msaa_OBJID_MENU          = 0xFFFFFFFD,
msaa_OBJID_CLIENT        = 0xFFFFFFFC,
msaa_OBJID_VSCROLL       = 0xFFFFFFFB,
msaa_OBJID_HSCROLL       = 0xFFFFFFFA,
msaa_OBJID_SIZEGRIP      = 0xFFFFFFF9,
msaa_OBJID_CARET         = 0xFFFFFFF8,
msaa_OBJID_CURSOR        = 0xFFFFFFF7,
msaa_OBJID_ALERT         = 0xFFFFFFF6,
msaa_OBJID_SOUND         = 0xFFFFFFF5,
msaa_OBJID_QUERYCLASSNAMEIDX = 0xFFFFFFF4,
msaa_OBJID_NATIVEOM      = 0xFFFFFFF0,

;Navigation
msaa_NAVDIR_UP           = 0x00000001,
msaa_NAVDIR_DOWN         = 0x00000002,
msaa_NAVDIR_LEFT         = 0x00000003,
msaa_NAVDIR_RIGHT        = 0x00000004,
msaa_NAVDIR_NEXT         = 0x00000005,
msaa_NAVDIR_PREVIOUS     = 0x00000006,
msaa_NAVDIR_FIRSTCHILD   = 0x00000007,
msaa_NAVDIR_LASTCHILD    = 0x00000008,

;Selection 
msaa_SELFLAG_NONE                    = 0x00000000,
msaa_SELFLAG_TAKEFOCUS               = 0x00000001,
msaa_SELFLAG_TAKESELECTION           = 0x00000002,
msaa_SELFLAG_EXTENDSELECTION         = 0x00000004,
msaa_SELFLAG_ADDSELECTION            = 0x00000008,
msaa_SELFLAG_REMOVESELECTION         = 0x00000010,
msaa_SELFLAG_VALID                   = 0x0000001F,

;States
msaa_STATE_UNAVAILABLE        = 0x00000001,
msaa_STATE_SELECTED           = 0x00000002,
msaa_STATE_FOCUSED            = 0x00000004,
msaa_STATE_PRESSED            = 0x00000008,
msaa_STATE_CHECKED            = 0x00000010,
msaa_STATE_MIXED              = 0x00000020,
msaa_STATE_READONLY           = 0x00000040,
msaa_STATE_HOTTRACKED         = 0x00000080,
msaa_STATE_DEFAULT            = 0x00000100,
msaa_STATE_EXPANDED           = 0x00000200,
msaa_STATE_COLLAPSED          = 0x00000400,
msaa_STATE_BUSY               = 0x00000800,
msaa_STATE_FLOATING           = 0x00001000,
msaa_STATE_MARQUEED           = 0x00002000,
msaa_STATE_ANIMATED           = 0x00004000,
msaa_STATE_INVISIBLE          = 0x00008000,
msaa_STATE_OFFSCREEN          = 0x00010000,
msaa_STATE_SIZEABLE           = 0x00020000,
msaa_STATE_MOVEABLE           = 0x00040000,
msaa_STATE_SELFVOICING        = 0x00080000,
msaa_STATE_FOCUSABLE          = 0x00100000,
msaa_STATE_SELECTABLE         = 0x00200000,
msaa_STATE_LINKED             = 0x00400000,
msaa_STATE_TRAVERSED          = 0x00800000,
msaa_STATE_MULTISELECTABLE    = 0x01000000,
msaa_STATE_EXTSELECTABLE      = 0x02000000,
msaa_STATE_ALERT_LOW          = 0x04000000,
msaa_STATE_ALERT_MEDIUM       = 0x08000000,
msaa_STATE_ALERT_HIGH         = 0x10000000,
msaa_state_protected = 0x1FFFFFFE,
 msaa_STATE_VALID              = 0x1FFFFFFF,

;Roles
msaa_ROLE_TITLEBAR            = 0x00000001,
msaa_ROLE_MENUBAR             = 0x00000002,
msaa_ROLE_SCROLLBAR           = 0x00000003,
msaa_ROLE_GRIP                = 0x00000004,
msaa_ROLE_SOUND               = 0x00000005,
msaa_ROLE_CURSOR              = 0x00000006,
msaa_ROLE_CARET               = 0x00000007,
msaa_ROLE_ALERT               = 0x00000008,
msaa_ROLE_WINDOW              = 0x00000009,
msaa_ROLE_CLIENT              = 0x0000000A,
msaa_ROLE_MENUPOPUP           = 0x0000000B,
msaa_ROLE_MENUITEM            = 0x0000000C,
msaa_ROLE_TOOLTIP             = 0x0000000D,
msaa_ROLE_APPLICATION         = 0x0000000E,
msaa_ROLE_DOCUMENT            = 0x0000000F,
msaa_ROLE_PANE                = 0x00000010,
msaa_ROLE_CHART               = 0x00000011,
msaa_ROLE_DIALOG              = 0x00000012,
msaa_ROLE_BORDER              = 0x00000013,
msaa_ROLE_GROUPING            = 0x00000014,
msaa_ROLE_SEPARATOR           = 0x00000015,
msaa_ROLE_TOOLBAR             = 0x00000016,
msaa_ROLE_STATUSBAR           = 0x00000017,
msaa_ROLE_TABLE               = 0x00000018,
msaa_ROLE_COLUMNHEADER        = 0x00000019,
msaa_ROLE_ROWHEADER           = 0x0000001A,
msaa_ROLE_COLUMN              = 0x0000001B,
msaa_ROLE_ROW                 = 0x0000001C,
msaa_ROLE_CELL                = 0x0000001D,
msaa_ROLE_LINK                = 0x0000001E,
msaa_ROLE_HELPBALLOON         = 0x0000001F,
msaa_ROLE_CHARACTER           = 0x00000020,
msaa_ROLE_LIST                = 0x00000021,
msaa_ROLE_LISTITEM            = 0x00000022,
msaa_ROLE_OUTLINE             = 0x00000023,
msaa_ROLE_OUTLINEITEM         = 0x00000024,
msaa_ROLE_PAGETAB             = 0x00000025,
msaa_ROLE_PROPERTYPAGE        = 0x00000026,
msaa_ROLE_INDICATOR           = 0x00000027,
msaa_ROLE_GRAPHIC             = 0x00000028,
msaa_ROLE_STATICTEXT          = 0x00000029,
msaa_ROLE_TEXT                = 0x0000002A,
msaa_ROLE_PUSHBUTTON          = 0x0000002B,
msaa_ROLE_CHECKBUTTON         = 0x0000002C,
msaa_ROLE_RADIOBUTTON         = 0x0000002D,
msaa_ROLE_COMBOBOX            = 0x0000002E,
msaa_ROLE_DROPLIST            = 0x0000002F,
msaa_ROLE_PROGRESSBAR         = 0x00000030,
msaa_ROLE_DIAL                = 0x00000031,
msaa_ROLE_HOTKEYFIELD         = 0x00000032,
msaa_ROLE_SLIDER              = 0x00000033,
msaa_ROLE_SPINBUTTON          = 0x00000034,
msaa_ROLE_DIAGRAM             = 0x00000035,
msaa_ROLE_ANIMATION           = 0x00000036,
msaa_ROLE_EQUATION            = 0x00000037,
msaa_ROLE_BUTTONDROPDOWN      = 0x00000038,
msaa_ROLE_BUTTONMENU          = 0x00000039,
msaa_ROLE_BUTTONDROPDOWNGRID  = 0x0000003A,
msaa_ROLE_WHITESPACE          = 0x0000003B,
msaa_ROLE_PAGETABLIST         = 0x0000003C,
msaa_ROLE_CLOCK               = 0x0000003D
