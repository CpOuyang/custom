{
    ["databars"] = {
        ["artifact"] = {
            ["orientation"] = "HORIZONTAL",
            ["textFormat"] = "CURREM",
            ["height"] = 10,
            ["width"] = 270,
        },
        ["experience"] = {
            ["height"] = 10,
            ["orientation"] = "HORIZONTAL",
            ["width"] = 270,
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["currentTutorial"] = 9,
    ["sle"] = {
        ["Armory"] = {
            ["Character"] = {
                ["Enable"] = false,
            },
            ["Inspect"] = {
                ["Enable"] = false,
            },
        },
    },
    ["movers"] = {
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,742",
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-118,61",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,742",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,106",
        ["ElvAB_4"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-438,30",
        ["ElvUF_TargetTargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,210",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,226",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-8,28",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,289",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,343",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-65,-264",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,460",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,251",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,270",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-172,28",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,210",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,-4",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,342",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,56",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,270",
    },
    ["bags"] = {
        ["countFontSize"] = 12,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["ignoredItems"] = {
            ["tt:爐石"] = "tt:爐石",
            ["n:治療石"] = "n:治療石",
        },
        ["countFontOutline"] = "OUTLINE",
    },
    ["chat"] = {
        ["font"] = "聊天",
        ["panelWidth"] = 600,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["panelBackdrop"] = "LEFT",
        ["tabFontSize"] = 14,
        ["panelTabBackdrop"] = true,
    },
    ["unitframe"] = {
        ["fontSize"] = 18,
        ["units"] = {
            ["player"] = {
                ["height"] = 64,
            },
            ["raid40"] = {
                ["height"] = 60,
            },
            ["party"] = {
                ["height"] = 60,
            },
            ["target"] = {
                ["height"] = 64,
            },
            ["raid"] = {
                ["height"] = 60,
                ["width"] = 90,
            },
            ["assist"] = {
                ["height"] = 60,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["width"] = 90,
            },
            ["tank"] = {
                ["height"] = 60,
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["width"] = 90,
            },
        },
        ["fontOutline"] = "NONE",
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonspacing"] = 10,
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["fontSize"] = 16,
        ["bar2"] = {
            ["enabled"] = true,
            ["buttonsize"] = 40,
            ["buttonspacing"] = 10,
        },
        ["bar1"] = {
            ["buttonspacing"] = 10,
            ["buttonsize"] = 40,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["bar4"] = {
            ["buttonspacing"] = 4,
            ["backdrop"] = false,
            ["buttonsize"] = 52,
            ["buttons"] = 2,
        },
        ["barPet"] = {
            ["point"] = "TOPLEFT",
            ["buttonsPerRow"] = 10,
            ["buttonsize"] = 28,
            ["backdrop"] = false,
        },
        ["fontOutline"] = "NONE",
        ["macrotext"] = true,
        ["backdropSpacingConverted"] = true,
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["raidmarkersbar"] = {
            ["visible"] = "show",
            ["scale"] = 1.2,
        },
    },
    ["nameplates"] = {
        ["fontSize"] = 14,
        ["fontOutline"] = "NONE",
        ["loadDistance"] = 50,
        ["clickableHeight"] = 15,
        ["units"] = {
            ["ENEMY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["enable"] = true,
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["ENEMY_PLAYER"] = {
                ["healthbar"] = {
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["FRIENDLY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 14,
                },
            },
        },
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["bottomPanel"] = false,
        ["topPanel"] = false,
        ["bordercolor"] = {
            ["r"] = 0.50196078431373,
            ["g"] = 0.50196078431373,
            ["b"] = 0.50196078431373,
        },
        ["objectiveFrameHeight"] = 720,
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
    },
}::profile::Cipherarrow
