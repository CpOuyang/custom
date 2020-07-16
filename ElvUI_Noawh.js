{
    ["databars"] = {
        ["honor"] = {
            ["enable"] = false,
        },
        ["experience"] = {
            ["width"] = 220,
            ["textFormat"] = "CURPERC",
        },
        ["azerite"] = {
            ["width"] = 220,
            ["textFormat"] = "CURPERC",
        },
    },
    ["general"] = {
        ["fontSize"] = 14,
        ["itemLevel"] = {
            ["displayCharacterInfo"] = false,
            ["displayInspectInfo"] = false,
        },
        ["objectiveFrameHeight"] = 720,
        ["bordercolor"] = {
            ["r"] = 0,
            ["g"] = 0,
            ["b"] = 0,
        },
        ["autoRepair"] = "GUILD",
        ["minimap"] = {
            ["locationText"] = "SHOW",
            ["locationFontSize"] = 14,
        },
    },
    ["movers"] = {
        ["PetAB"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,301",
        ["ElvUF_RaidMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-300",
        ["LeftChatMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,4,4",
        ["GMMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-13",
        ["BossButton"] = "BOTTOM,ElvUIParent,BOTTOM,0,193",
        ["LootFrameMover"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-114",
        ["ZoneAbility"] = "BOTTOM,ElvUIParent,BOTTOM,0,130",
        ["ElvUF_RaidpetMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,736",
        ["ElvUF_FocusMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-500,-430",
        ["MicrobarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-135,270",
        ["ExperienceBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-186,272",
        ["ElvUF_TargetTargetMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-475,300",
        ["ElvUF_Raid40Mover"] = "TOPLEFT,ElvUIParent,TOPLEFT,20,-280",
        ["ElvAB_1"] = "BOTTOM,ElvUIParent,BOTTOM,0,6",
        ["ElvAB_2"] = "BOTTOM,ElvUIParent,BOTTOM,0,90",
        ["DurabilityFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-385,-203",
        ["ElvUI_RMBarMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-369,381",
        ["TalkingHeadFrameMover"] = "BOTTOM,ElvUIParent,BOTTOM,0,352",
        ["ElvUF_PetMover"] = "BOTTOM,ElvUIParent,BOTTOM,-315,200",
        ["AzeriteBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,348",
        ["ElvAB_3"] = "BOTTOM,ElvUIParent,BOTTOM,0,48",
        ["ElvAB_5"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,270",
        ["VehicleLeaveButton"] = "BOTTOM,ElvUIParent,BOTTOM,-235,132",
        ["RightChatMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["ShiftAB"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,1076",
        ["ObjectiveFrameMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-140,-212",
        ["ElvUIBagMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-4,4",
        ["VOICECHAT"] = "TOPLEFT,ElvUIParent,TOPLEFT,4,-91",
        ["ElvAB_6"] = "BOTTOM,ElvUIParent,BOTTOM,0,156",
        ["ElvUF_TargetCastbarMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,281",
        ["ArenaHeaderMover"] = "TOPRIGHT,ElvUIParent,TOPRIGHT,-72,-351",
        ["TooltipMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-7,7",
        ["ElvUF_TankMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,868",
        ["BossHeaderMover"] = "BOTTOMRIGHT,ElvUIParent,BOTTOMRIGHT,-72,329",
        ["TotemBarMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,486,64",
        ["ElvUF_PlayerMover"] = "BOTTOM,ElvUIParent,BOTTOM,-270,300",
        ["ElvUF_PartyMover"] = "BOTTOMLEFT,ElvUIParent,BOTTOMLEFT,410,400",
        ["ElvUF_TargetMover"] = "BOTTOM,ElvUIParent,BOTTOM,270,300",
        ["ArtifactBarMover"] = "BOTTOM,ElvUIParent,BOTTOM,-200,333",
        ["ElvUF_AssistMover"] = "TOPLEFT,ElvUIParent,BOTTOMLEFT,4,747",
    },
    ["bags"] = {
        ["countFontSize"] = 12,
        ["vendorGrays"] = {
            ["enable"] = true,
        },
        ["countFontOutline"] = "OUTLINE",
        ["bankWidth"] = 400,
        ["itemLevelFontSize"] = 12,
        ["itemLevelFontOutline"] = "OUTLINE",
        ["bagSize"] = 40,
        ["bagWidth"] = 440,
        ["junkIcon"] = true,
    },
    ["chat"] = {
        ["font"] = "聊天",
        ["panelTabTransparency"] = true,
        ["panelHeight"] = 240,
        ["timeStampFormat"] = "%H:%M:%S ",
        ["panelTabBackdrop"] = true,
        ["tabFontSize"] = 14,
        ["panelWidth"] = 480,
    },
    ["unitframe"] = {
        ["fontSize"] = 14,
        ["units"] = {
            ["tank"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["enable"] = false,
                ["width"] = 84,
                ["verticalSpacing"] = 3,
                ["height"] = 56,
            },
            ["targettarget"] = {
                ["power"] = {
                    ["enable"] = false,
                },
                ["width"] = 100,
                ["name"] = {
                    ["xOffset"] = 2,
                    ["yOffset"] = 14,
                    ["text_format"] = "[name:short]",
                    ["position"] = "TOPRIGHT",
                },
                ["height"] = 28,
            },
            ["raid"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["fontOutline"] = "OUTLINE",
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["resurrectIcon"] = {
                    ["enable"] = false,
                },
                ["groupSpacing"] = 2,
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["numGroups"] = 8,
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
                ["verticalSpacing"] = 1,
            },
            ["pet"] = {
                ["colorOverride"] = "FORCE_OFF",
                ["buffs"] = {
                    ["attachTo"] = "DEBUFFS",
                },
                ["castbar"] = {
                    ["enable"] = false,
                    ["width"] = 130,
                },
            },
            ["assist"] = {
                ["targetsGroup"] = {
                    ["height"] = 45,
                    ["width"] = 90,
                },
                ["enable"] = false,
                ["width"] = 84,
                ["verticalSpacing"] = 3,
                ["height"] = 56,
            },
            ["player"] = {
                ["debuffs"] = {
                    ["perrow"] = 6,
                    ["yOffset"] = 24,
                },
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[perhp]% || [health:current]",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["power"] = {
                    ["position"] = "BOTTOMRIGHT",
                },
                ["width"] = 220,
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPRIGHT",
                    ["enable"] = true,
                    ["numrows"] = 2,
                    ["perrow"] = 6,
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["yOffset"] = 24,
                    ["text_format"] = "[name]",
                    ["position"] = "TOPLEFT",
                },
            },
            ["raid40"] = {
                ["horizontalSpacing"] = 1,
                ["debuffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -50,
                },
                ["rdebuffs"] = {
                    ["size"] = 20,
                    ["enable"] = true,
                    ["fontOutline"] = "OUTLINE",
                    ["xOffset"] = -30,
                    ["yOffset"] = 5,
                },
                ["resurrectIcon"] = {
                    ["enable"] = false,
                },
                ["groupSpacing"] = 2,
                ["roleIcon"] = {
                    ["enable"] = true,
                },
                ["power"] = {
                    ["enable"] = true,
                },
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["name"] = {
                    ["text_format"] = "[name:short]",
                },
                ["height"] = 48,
                ["verticalSpacing"] = 1,
                ["buffs"] = {
                    ["anchorPoint"] = "TOP",
                    ["sizeOverride"] = 16,
                    ["enable"] = true,
                    ["xOffset"] = 30,
                    ["yOffset"] = -16,
                },
            },
            ["focus"] = {
                ["width"] = 160,
                ["castbar"] = {
                    ["width"] = 160,
                },
                ["height"] = 48,
            },
            ["target"] = {
                ["debuffs"] = {
                    ["perrow"] = 6,
                },
                ["aurabar"] = {
                    ["enable"] = false,
                },
                ["power"] = {
                    ["position"] = "BOTTOMLEFT",
                },
                ["name"] = {
                    ["attachTextTo"] = "Frame",
                    ["position"] = "TOPRIGHT",
                    ["xOffset"] = 8,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel] [shortclassification]",
                    ["yOffset"] = 18,
                },
                ["health"] = {
                    ["yOffset"] = -26,
                    ["text_format"] = "[health:current] || [perhp]%",
                    ["position"] = "BOTTOMLEFT",
                },
                ["width"] = 220,
                ["castbar"] = {
                    ["width"] = 220,
                },
                ["height"] = 48,
                ["buffs"] = {
                    ["anchorPoint"] = "TOPLEFT",
                    ["perrow"] = 6,
                },
            },
            ["arena"] = {
                ["enable"] = false,
            },
            ["party"] = {
                ["debuffs"] = {
                    ["sizeOverride"] = 0,
                },
                ["verticalSpacing"] = 6,
                ["power"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMRIGHT",
                },
                ["health"] = {
                    ["text_format"] = "",
                    ["position"] = "BOTTOMLEFT",
                },
                ["healPrediction"] = {
                    ["enable"] = true,
                },
                ["width"] = 144,
                ["name"] = {
                    ["yOffset"] = 12,
                    ["text_format"] = "[name:medium] [difficultycolor][smartlevel]",
                    ["position"] = "TOPLEFT",
                },
                ["height"] = 36,
                ["buffs"] = {
                    ["enable"] = true,
                },
            },
            ["boss"] = {
                ["enable"] = false,
                ["width"] = 180,
                ["height"] = 60,
            },
        },
        ["smoothbars"] = true,
        ["colors"] = {
            ["colorhealthbyvalue"] = false,
            ["healthclass"] = true,
        },
        ["fontOutline"] = "NONE",
        ["smartRaidFilter"] = false,
    },
    ["actionbar"] = {
        ["bar3"] = {
            ["buttonsPerRow"] = 12,
            ["buttonsize"] = 40,
            ["buttons"] = 12,
        },
        ["bar6"] = {
            ["buttonsize"] = 40,
        },
        ["fontOutline"] = "NONE",
        ["microbar"] = {
            ["enabled"] = true,
        },
        ["bar1"] = {
            ["buttonsize"] = 40,
        },
        ["fontSize"] = 16,
        ["bar5"] = {
            ["buttonsize"] = 31,
            ["buttons"] = 4,
        },
        ["bar2"] = {
            ["buttonsize"] = 40,
            ["enabled"] = true,
        },
        ["macrotext"] = true,
        ["barPet"] = {
            ["buttonsPerRow"] = 10,
            ["backdrop"] = false,
            ["point"] = "TOPLEFT",
        },
    },
    ["nameplates"] = {
        ["plateSize"] = {
            ["enemyWidth"] = 180,
        },
        ["units"] = {
            ["PLAYER"] = {
                ["health"] = {
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
            },
            ["FRIENDLY_NPC"] = {
                ["name"] = {
                    ["fontSize"] = 14,
                },
            },
            ["ENEMY_NPC"] = {
                ["castbar"] = {
                    ["width"] = 180,
                },
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
                ["name"] = {
                    ["fontSize"] = 14,
                },
            },
            ["ENEMY_PLAYER"] = {
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
                ["name"] = {
                    ["fontSize"] = 14,
                },
            },
            ["FRIENDLY_PLAYER"] = {
                ["health"] = {
                    ["height"] = 14,
                    ["text"] = {
                        ["fontSize"] = 14,
                    },
                },
                ["name"] = {
                    ["fontSize"] = 14,
                },
            },
        },
    },
    ["auras"] = {
        ["debuffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
        ["fontOutline"] = "OUTLINE",
        ["buffs"] = {
            ["countFontSize"] = 12,
            ["durationFontSize"] = 12,
        },
    },
    ["v11NamePlateReset"] = true,
}::profile::Cipherblade
