{
    ["databars"] = {
        ["artifact"] = {
            ["orientation"] = "HORIZONTAL",
            ["textFormat"] = "CURREM",
            ["height"] = 10,
            ["width"] = 270,
        },
        ["experience"] = {
            ["orientation"] = "HORIZONTAL",
            ["height"] = 10,
            ["width"] = 270,
        },
        ["honor"] = {
            ["enable"] = false,
        },
    },
    ["currentTutorial"] = 7,
    ["general"] = {
        ["topPanel"] = false,
        ["bordercolor"] = {
            ["r"] = 0,
            ["g"] = 0,
            ["b"] = 0,
        },
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
        ["bottomPanel"] = false,
        ["numberPrefixStyle"] = "CHINESE",
        ["objectiveFrameHeight"] = 720,
        ["fontSize"] = 14,
    },
    ["movers"] = {
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,742",
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-73,280",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,742",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,106",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,807",
        ["ElvAB_4"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-355,314",
        ["ElvUF_TargetTargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,210",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,289",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,226",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,247",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,460",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,343",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-65,-264",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,270",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,251",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,246",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,210",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,342",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,56",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,200,270",
    },
    ["bags"] = {
        ["bagWidth"] = 400,
        ["ignoredItems"] = {
            ["n:上將的指南針"] = "n:上將的指南針",
            ["n:治療石"] = "n:治療石",
            ["tt:爐石"] = "tt:爐石",
            ["n:飛行管理員的哨子"] = "n:飛行管理員的哨子",
        },
        ["countFontOutline"] = "OUTLINE",
        ["bagSize"] = 38,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["countFontSize"] = 12,
    },
    ["chat"] = {
        ["panelTabBackdrop"] = true,
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["tabFontSize"] = 14,
        ["panelWidth"] = 600,
    },
    ["unitframe"] = {
        ["fontSize"] = 18,
        ["fontOutline"] = "NONE",
        ["units"] = {
            ["tank"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 60,
                ["enable"] = false,
                ["width"] = 90,
            },
            ["assist"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["height"] = 60,
                ["enable"] = false,
                ["width"] = 90,
            },
            ["party"] = {
                ["enable"] = false,
                ["height"] = 60,
            },
            ["raid40"] = {
                ["enable"] = false,
                ["height"] = 60,
            },
            ["target"] = {
                ["height"] = 64,
            },
            ["raid"] = {
                ["enable"] = false,
                ["width"] = 90,
                ["height"] = 60,
            },
            ["player"] = {
                ["height"] = 64,
            },
        },
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttons"] = 12,
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttonspacing"] = 10,
        },
        ["bar6"] = {
            ["buttonspacing"] = 10,
            ["buttonsize"] = 40,
        },
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["raidmarkersbar"] = {
            ["visible"] = "show",
            ["scale"] = 1.2,
        },
        ["bar2"] = {
            ["enabled"] = true,
            ["buttonsize"] = 40,
            ["buttonspacing"] = 10,
        },
        ["bar1"] = {
            ["buttonspacing"] = 10,
            ["buttonsize"] = 40,
        },
        ["bar4"] = {
            ["buttonsize"] = 56,
            ["point"] = "BOTTOMLEFT",
            ["buttons"] = 7,
            ["showGrid"] = false,
            ["backdrop"] = false,
            ["buttonspacing"] = 4,
        },
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["fontSize"] = 16,
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
        ["backdropSpacingConverted"] = true,
    },
    ["nameplates"] = {
        ["targetGlow"] = "style1",
        ["fontSize"] = 14,
        ["fontOutline"] = "NONE",
        ["units"] = {
            ["ENEMY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 12,
                    ["text"] = {
                        ["enable"] = true,
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["FRIENDLY_NPC"] = {
                ["healthbar"] = {
                    ["height"] = 12,
                },
            },
            ["PLAYER"] = {
                ["enable"] = true,
            },
            ["HEALER"] = {
                ["healthbar"] = {
                    ["height"] = 12,
                },
            },
            ["ENEMY_PLAYER"] = {
                ["healthbar"] = {
                    ["height"] = 12,
                    ["text"] = {
                        ["format"] = "CURRENT_PERCENT",
                    },
                },
            },
            ["FRIENDLY_PLAYER"] = {
                ["healthbar"] = {
                    ["height"] = 12,
                },
            },
        },
        ["glowColor"] = {
            ["r"] = 1,
            ["g"] = 1,
            ["b"] = 0,
        },
        ["clickableHeight"] = 15,
        ["loadDistance"] = 50,
    },
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
    ["thinBorderColorSet"] = true,
}::profile::Cipherarrow
